'use client'

import { useState } from 'react'
import type { ChangeEvent } from 'react'

import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Controller } from 'react-hook-form'
import { validateSolAddress } from '../utils/solanaUtils'
import CustomTextField from '../../../../@core/components/mui/TextField'

type CustomCheckBoxProps = {
  name: string
  label: string
  controlName: string
  control: any
  errors: any
  register: any
  resetField: any
}

const CustomCheckBox = ({ name, label, controlName, control, errors, register, resetField }: CustomCheckBoxProps) => {
  const [checked, setChecked] = useState<boolean>(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
    resetField(controlName)
  }

  return (
    <FormGroup>
      <FormControlLabel
        label={label}
        control={<Checkbox sx={{ color: '#000 !important' }} checked={checked} onChange={handleChange} name={name} />}
      />
      {checked && (
        <Controller
          name={controlName}
          control={control}
          {...register(controlName, {
            required: true,
            validate: {
              notAddress: (field: string) => {
                return validateSolAddress(field)
              }
            }
          })}
          render={({ field }) => (
            <CustomTextField
              {...field}
              sx={{ width: { xs: '100%', sm: '30%' } }}
              label=''
              placeholder=''
              {...(errors[controlName] && { error: true, helperText: 'This field is required.' })}
              {...(errors[controlName]?.type === 'notAddress' && { error: true, helperText: 'Invalid Address.' })}
            />
          )}
        />
      )}
    </FormGroup>
  )
}

export default CustomCheckBox
