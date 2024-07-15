'use client'

import { useState } from 'react'
import type { ChangeEvent } from 'react'

import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Controller } from 'react-hook-form'
import CustomTextField from '../../../../@core/components/mui/TextField'
import { validateNumber, validateNumberAndPercentage, validateSolAddress } from '../utils/solanaUtils'
import { Grid, Typography } from '@mui/material'

type TransferFeeFieldsProps = {
  controlName1: string
  controlName2: string
  control: any
  errors: any
  register: any
  resetField: any
}

const TransferFeeFields = ({
  controlName1,
  controlName2,
  control,
  errors,
  register,
  resetField
}: TransferFeeFieldsProps) => {
  const [checked, setChecked] = useState<boolean>(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
    resetField(controlName1)
    resetField(controlName2)
  }

  return (
    <FormGroup>
      <FormControlLabel
        label={'Enable Transfer Fee Config'}
        control={<Checkbox sx={{ color: '#000 !important' }} checked={checked} onChange={handleChange} />}
      />
      {checked && (
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Controller
              name={controlName1}
              control={control}
              {...register(controlName1, {
                required: true,
                validate: {
                  validatePercentage: (field: string) => {
                    return validateNumberAndPercentage(field)
                  }
                }
              })}
              render={({ field }) => (
                <>
                  <CustomTextField
                    {...field}
                    sx={{ width: { xs: '100%', sm: '30%' } }}
                    label='Transfer fee percent (%)'
                    placeholder='Ex: 2'
                    {...(errors[controlName1] && { error: true, helperText: 'This field is required.' })}
                    {...(errors[controlName1]?.type === 'validatePercentage' && {
                      error: true,
                      helperText: 'Invalid Value. Value should be numeric and less than 100'
                    })}
                  />
                  <Typography color='#2bffff' fontSize={12} mt={2}>
                    Fee assessed on every transfer, as basis points of the transfer amount. For example, with 50 basis
                    points, a transfer of 1,000 tokens yields 5 tokens
                  </Typography>
                </>
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name={controlName2}
              control={control}
              {...register(controlName2, {
                required: true,
                validate: {
                  onlyNumber: (field: string) => {
                    return validateNumber(field)
                  }
                }
              })}
              render={({ field }) => (
                <>
                  <CustomTextField
                    {...field}
                    sx={{ width: { xs: '100%', sm: '30%' } }}
                    label='Max Transfer Fee'
                    placeholder='Ex: 10'
                    {...(errors[controlName2] && { error: true, helperText: 'This field is required.' })}
                    {...(errors[controlName2]?.type === 'onlyNumber' && {
                      error: true,
                      helperText: 'Only numeric values.'
                    })}
                  />
                  <Typography color='#2bffff' fontSize={12} mt={2}>
                    Cap on transfer fees. With a maximum fee of 5,000 tokens, even a transfer of 10,000,000,000,000
                    tokens only yields 5,000 tokens
                  </Typography>
                </>
              )}
            />
          </Grid>
        </Grid>
      )}
    </FormGroup>
  )
}

export default TransferFeeFields
