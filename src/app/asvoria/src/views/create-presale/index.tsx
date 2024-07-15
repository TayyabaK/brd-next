'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stepper from '@mui/material/Stepper'
import MenuItem from '@mui/material/MenuItem'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

// Third-party Imports
import { toast } from 'react-toastify'
import { Controller, useForm } from 'react-hook-form'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { email, object, minLength, string, array, forward, custom, number, boolean, date } from 'valibot'

// Component Imports
import CustomTextField from '../../../../../@core/components/mui/TextField'
import StepperWrapper from '../../../../../@core/styles/stepper'
import StepperCustomDot from '../../components/stepper-dot'
import DirectionalIcon from '../../components/DirectionalIcon'
import { Box, FormControlLabel, Switch } from '@mui/material'

import AppReactDatepicker from '../../libs/styles/AppReactDatepicker'
import styles from '../../../../../@core/styles/table.module.css'
import { DateTime } from '@metaplex-foundation/umi'

// Vars
const steps = [
  {
    title: 'Verify Token',
    subtitle: 'Enter the token address and verify'
  },
  {
    title: 'DeFi Launchpad Info',
    subtitle: 'Submit all the necessary presale information'
  },
  {
    title: 'Add Addtional Info',
    subtitle: 'Let people know who you are'
  },
  {
    title: 'Finalize',
    subtitle: 'Review your information'
  }
]

const verifyTokenSchema = object({
  tokenAddress: string([minLength(1, 'This field is required')]),
  currency: string([minLength(1, 'This field is required')]),
  fee: string([minLength(1, 'This field is required')]),
  listing: string([minLength(1, 'This field is required')]),
  router: string([minLength(1, 'This field is required')])
})

const defiInfoSchema = object({
  presaleRate: string([minLength(1, 'This field is required')]),
  whitelist: boolean(),
  softCap: string([minLength(1, 'This field is required')]),
  hardCap: string([minLength(1, 'This field is required')]),
  minBuy: string([minLength(1, 'This field is required')]),
  maxBuy: string([minLength(1, 'This field is required')]),
  refundType: string([minLength(1, 'This field is required')]),
  liquidityPercent: string([minLength(1, 'This field is required')]),
  listingRate: string([minLength(1, 'This field is required')]),
  startDate: date(),
  endDate: date(),
  liquidityType: string([minLength(1, 'This field is required')])
})

const socialSchema = object({
  website: string([minLength(1, 'This field is required')]),
  desc: string([minLength(1, 'This field is required')]),
  telegram: string(),
  discord: string(),
  reddit: string(),
  youtube: string(),
  instagram: string(),
  twitter: string(),
  facebook: string(),
  github: string()
})

const CreatePresale = () => {
  // States
  const [activeStep, setActiveStep] = useState(0)
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false)

  // Vars
  const Languages = ['English', 'French', 'Spanish', 'Portuguese', 'Italian', 'German', 'Arabic']

  // Hooks
  const {
    reset: verifyTokenReset,
    control: verifyContol,
    handleSubmit: handleVerifyTokenSubmit,
    formState: { errors: verifyErrors },
    getValues: getVerifyTokenValues
  } = useForm({
    resolver: valibotResolver(verifyTokenSchema),
    defaultValues: {
      tokenAddress: '',
      currency: '',
      fee: '',
      listing: '',
      router: ''
    }
  })

  const {
    reset: defiReset,
    control: defiControl,
    handleSubmit: handleDefiSubmit,
    formState: { errors: defiErrors },
    getValues: getDefiValues
  } = useForm({
    resolver: valibotResolver(defiInfoSchema),
    defaultValues: {
      presaleRate: '',
      whitelist: false,
      softCap: '',
      hardCap: '',
      minBuy: '',
      maxBuy: '',
      refundType: '',
      liquidityPercent: '',
      listingRate: '',
      startDate: '',
      endDate: '',
      liquidityType: ''
    }
  })

  const {
    reset: socialReset,
    control: socialControl,
    handleSubmit: handleSocialSubmit,
    formState: { errors: socialErrors },
    getValues: getSocialValues
  } = useForm({
    resolver: valibotResolver(socialSchema),
    defaultValues: {
      website: '',
      desc: '',
      telegram: '',
      discord: '',
      reddit: '',
      youtube: '',
      instagram: '',
      twitter: '',
      facebook: '',
      github: ''
    }
  })

  const { handleSubmit: handleReviewSubmit } = useForm()

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleClickShowConfirmPassword = () => setIsConfirmPasswordShown(show => !show)

  const onSubmit = (data: any) => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)

    if (activeStep === steps.length - 1) {
      toast.success('Presale created successfully')
    }
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
    verifyTokenReset({ tokenAddress: '', currency: '', fee: '', listing: '', router: '' })
    defiReset({
      presaleRate: '',
      whitelist: false,
      softCap: '',
      hardCap: '',
      minBuy: '',
      maxBuy: '',
      refundType: '',
      liquidityPercent: '',
      listingRate: '',
      startDate: '',
      endDate: '',
      liquidityType: ''
    })
    socialReset({
      website: '',
      desc: '',
      telegram: '',
      discord: '',
      reddit: '',
      youtube: '',
      instagram: '',
      twitter: '',
      facebook: '',
      github: ''
    })
    setIsPasswordShown(false)
    setIsConfirmPasswordShown(false)
  }

  const renderStepContent = (activeStep: number) => {
    switch (activeStep) {
      case 0:
        return (
          <form key={0} onSubmit={handleVerifyTokenSubmit(onSubmit)}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography className='font-medium' color='text.primary'>
                  {steps[0].title}
                </Typography>
                <Typography variant='body2'>{steps[0].subtitle}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='tokenAddress'
                  control={verifyContol}
                  rules={{ required: true }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Token Address'
                      placeholder='Enter token address'
                      {...(verifyErrors.tokenAddress && { error: true, helperText: verifyErrors.tokenAddress.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='currency'
                  control={verifyContol}
                  rules={{ required: true }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      select
                      fullWidth
                      label='Currency'
                      {...(verifyErrors.currency && { error: true, helperText: verifyErrors.currency.message })}
                    >
                      <MenuItem value={'sol'}>SOL</MenuItem>
                    </CustomTextField>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='fee'
                  control={verifyContol}
                  rules={{ required: true }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      select
                      fullWidth
                      label='Fee'
                      {...(verifyErrors.fee && { error: true, helperText: verifyErrors.fee.message })}
                    >
                      <MenuItem value={'4'}>4%</MenuItem>
                    </CustomTextField>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='listing'
                  control={verifyContol}
                  rules={{ required: true }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      select
                      fullWidth
                      label='Listing'
                      {...(verifyErrors.listing && { error: true, helperText: verifyErrors.listing.message })}
                    >
                      <MenuItem value={'auto'}>Auto</MenuItem>
                      <MenuItem value={'manual'}>Manual</MenuItem>
                    </CustomTextField>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='router'
                  control={verifyContol}
                  rules={{ required: true }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      select
                      fullWidth
                      label='Router'
                      {...(verifyErrors.router && { error: true, helperText: verifyErrors.router.message })}
                    >
                      <MenuItem value={'RaydiumAMMV4'}>Raydium AMM V4</MenuItem>
                    </CustomTextField>
                  )}
                />
              </Grid>
              <Grid item xs={12} className='flex justify-between'>
                <Button
                  variant='tonal'
                  disabled
                  color='secondary'
                  startIcon={<DirectionalIcon ltrIconClass='tabler-arrow-left' rtlIconClass='tabler-arrow-right' />}
                >
                  Back
                </Button>
                <Button
                  variant='contained'
                  type='submit'
                  endIcon={<DirectionalIcon ltrIconClass='tabler-arrow-right' rtlIconClass='tabler-arrow-left' />}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      case 1:
        return (
          <form key={1} onSubmit={handleDefiSubmit(onSubmit)}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography className='font-medium' color='text.primary'>
                  {steps[1].title}
                </Typography>
                <Typography variant='body2'>{steps[1].subtitle}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name='presaleRate'
                  control={defiControl}
                  rules={{ required: true }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Presale Rate'
                      placeholder='0'
                      {...(defiErrors.presaleRate && {
                        error: true,
                        helperText: defiErrors.presaleRate.message
                      })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name='whitelist'
                  control={defiControl}
                  rules={{ required: false }}
                  render={({ field: { value, onChange } }: { field: any }) => (
                    <FormControlLabel
                      control={<Switch color='secondary' checked={value} onChange={onChange} />}
                      label='Whitelist'
                      {...(defiErrors.whitelist && {
                        error: true,
                        helperText: defiErrors.whitelist.message
                      })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='softCap'
                  control={defiControl}
                  rules={{ required: true }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Soft Cap'
                      placeholder=''
                      {...(defiErrors.softCap && {
                        error: true,
                        helperText: defiErrors.softCap.message
                      })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='hardCap'
                  control={defiControl}
                  rules={{ required: true }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Hard Cap'
                      placeholder=''
                      {...(defiErrors.hardCap && {
                        error: true,
                        helperText: defiErrors.hardCap.message
                      })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='minBuy'
                  control={defiControl}
                  rules={{ required: true }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Minimum Buy'
                      placeholder=''
                      {...(defiErrors.minBuy && {
                        error: true,
                        helperText: defiErrors.minBuy.message
                      })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='maxBuy'
                  control={defiControl}
                  rules={{ required: true }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Maximum Buy'
                      placeholder=''
                      {...(defiErrors.maxBuy && {
                        error: true,
                        helperText: defiErrors.maxBuy.message
                      })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='refundType'
                  control={defiControl}
                  rules={{ required: true }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      select
                      fullWidth
                      label='Refund Type'
                      {...(defiErrors.refundType && { error: true, helperText: defiErrors.refundType.message })}
                    >
                      <MenuItem value={'burn'}>Burn</MenuItem>
                      <MenuItem value={'refund'}>Refund</MenuItem>
                    </CustomTextField>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='liquidityPercent'
                  control={defiControl}
                  rules={{ required: true }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Liquidity Percent'
                      placeholder=''
                      {...(defiErrors.liquidityPercent && {
                        error: true,
                        helperText: defiErrors.liquidityPercent.message
                      })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='listingRate'
                  control={defiControl}
                  rules={{ required: true }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Listing Rate'
                      placeholder=''
                      {...(defiErrors.listingRate && {
                        error: true,
                        helperText: defiErrors.listingRate.message
                      })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='startDate'
                  control={defiControl}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }: { field: any }) => (
                    <AppReactDatepicker
                      selected={value}
                      showTimeSelect
                      timeFormat='HH:mm'
                      timeIntervals={15}
                      dateFormat='MM/dd/yyyy h:mm aa'
                      onChange={onChange}
                      customInput={
                        <CustomTextField
                          value={value}
                          onChange={onChange}
                          fullWidth
                          label='Start Date (UTC)'
                          {...(defiErrors.startDate && { error: true, helperText: 'This field is required.' })}
                        />
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='endDate'
                  control={defiControl}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }: { field: any }) => (
                    <AppReactDatepicker
                      selected={value}
                      showTimeSelect
                      timeFormat='HH:mm'
                      timeIntervals={15}
                      dateFormat='MM/dd/yyyy h:mm aa'
                      onChange={onChange}
                      customInput={
                        <CustomTextField
                          value={value}
                          onChange={onChange}
                          fullWidth
                          label='End Date (UTC)'
                          {...(defiErrors.endDate && { error: true, helperText: 'This field is required.' })}
                        />
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='liquidityType'
                  control={defiControl}
                  rules={{ required: true }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      select
                      fullWidth
                      label='Liquidity Type'
                      {...(defiErrors.liquidityType && { error: true, helperText: defiErrors.liquidityType.message })}
                    >
                      <MenuItem value={'burn'}>Burn</MenuItem>
                      <MenuItem value={'lock'}>Lock</MenuItem>
                    </CustomTextField>
                  )}
                />
              </Grid>

              <Grid item xs={12} className='flex justify-between'>
                <Button
                  variant='tonal'
                  onClick={handleBack}
                  color='secondary'
                  startIcon={<DirectionalIcon ltrIconClass='tabler-arrow-left' rtlIconClass='tabler-arrow-right' />}
                >
                  Back
                </Button>
                <Button
                  variant='contained'
                  type='submit'
                  endIcon={<DirectionalIcon ltrIconClass='tabler-arrow-right' rtlIconClass='tabler-arrow-left' />}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      case 2:
        return (
          <form key={2} onSubmit={handleSocialSubmit(onSubmit)}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography className='font-medium' color='text.primary'>
                  {steps[2].title}
                </Typography>
                <Typography variant='body2'>{steps[2].subtitle}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='website'
                  control={socialControl}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }: { field: any }) => (
                    <CustomTextField
                      value={value}
                      onChange={onChange}
                      fullWidth
                      label='Website'
                      placeholder=''
                      {...(socialErrors.website && { error: true, helperText: socialErrors.website.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name='desc'
                  control={socialControl}
                  rules={{ required: true }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      rows={4}
                      fullWidth
                      multiline
                      label='Description'
                      placeholder=''
                      {...(socialErrors.desc && { error: true, helperText: socialErrors.desc.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='telegram'
                  control={socialControl}
                  rules={{ required: false }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Telegram'
                      placeholder=''
                      {...(socialErrors.telegram && { error: true, helperText: socialErrors.telegram.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='discord'
                  control={socialControl}
                  rules={{ required: false }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Discord'
                      placeholder=''
                      {...(socialErrors.discord && { error: true, helperText: socialErrors.discord.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='reddit'
                  control={socialControl}
                  rules={{ required: false }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Reddit'
                      placeholder=''
                      {...(socialErrors.reddit && { error: true, helperText: socialErrors.reddit.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='youtube'
                  control={socialControl}
                  rules={{ required: false }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Youtube Video'
                      placeholder=''
                      {...(socialErrors.youtube && { error: true, helperText: socialErrors.youtube.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='instagram'
                  control={socialControl}
                  rules={{ required: false }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Instagram'
                      placeholder=''
                      {...(socialErrors.instagram && { error: true, helperText: socialErrors.instagram.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='github'
                  control={socialControl}
                  rules={{ required: false }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Github'
                      placeholder=''
                      {...(socialErrors.github && { error: true, helperText: socialErrors.github.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='twitter'
                  control={socialControl}
                  rules={{ required: false }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Twitter'
                      placeholder=''
                      {...(socialErrors.twitter && { error: true, helperText: socialErrors.twitter.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='facebook'
                  control={socialControl}
                  rules={{ required: false }}
                  render={({ field }: { field: any }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Facebook'
                      placeholder=''
                      {...(socialErrors.facebook && { error: true, helperText: socialErrors.facebook.message })}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} className='flex justify-between'>
                <Button
                  variant='tonal'
                  onClick={handleBack}
                  color='secondary'
                  startIcon={<DirectionalIcon ltrIconClass='tabler-arrow-left' rtlIconClass='tabler-arrow-right' />}
                >
                  Back
                </Button>
                <Button
                  variant='contained'
                  type='submit'
                  endIcon={<DirectionalIcon ltrIconClass='tabler-arrow-right' rtlIconClass='tabler-arrow-left' />}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      case 3:
        const allValues = { ...getVerifyTokenValues(), ...getDefiValues(), ...getSocialValues() }
        const startDate: any = allValues.startDate
        const endDate: any = allValues.endDate
        return (
          <Grid container>
            <Grid item xs={12}>
              <Box marginX={'auto'} maxWidth={'700px'}>
                <table className={styles.table}>
                  <tbody>
                    <tr>
                      <td className='max-w-[90px]'>Token Address</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.tokenAddress}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Currency</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px] capitalize'>
                        {allValues.currency}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Fee</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.fee}%
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Listing</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px] capitalize'>
                        {allValues.listing}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Presale Rate</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px] capitalize'>
                        {allValues.presaleRate}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Whitelist</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px] capitalize'>
                        {allValues.whitelist ? 'Enabled' : '-'}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Soft Cap</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.softCap}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Hard Cap</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.hardCap}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Minimum Buy</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.minBuy}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Maximum Buy</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.maxBuy}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Refund Type</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.refundType}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Liquidity Type</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.liquidityType}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Router</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.router}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Liquidity Percent</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.liquidityPercent}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Listing Rate</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.listingRate}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Start Date</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {startDate.toUTCString()}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>End Date</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {endDate.toUTCString()}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Liquidity Lock Duration</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        Not available
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Website</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.website}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Description</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.desc}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Telegram</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.telegram === '' ? '-' : allValues.telegram}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Discord</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.discord === '' ? '-' : allValues.discord}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Reddit</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.reddit === '' ? '-' : allValues.reddit}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Youtube Video</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.youtube === '' ? '-' : allValues.youtube}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Instagram</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.instagram === '' ? '-' : allValues.instagram}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Github</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.github === '' ? '-' : allValues.github}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Twitter</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.twitter === '' ? '-' : allValues.twitter}
                      </td>
                    </tr>
                    <tr>
                      <td className='max-w-[90px]'>Facebook</td>
                      <td className='text-right text-ellipsis overflow-hidden whitespace-nowrap max-w-[220px]'>
                        {allValues.facebook === '' ? '-' : allValues.facebook}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </Grid>
            <form key={3} className='w-full' onSubmit={handleReviewSubmit(onSubmit)}>
              <Grid item xs={12} className='flex justify-between mt-20'>
                <Button
                  variant='tonal'
                  onClick={handleBack}
                  color='secondary'
                  startIcon={<DirectionalIcon ltrIconClass='tabler-arrow-left' rtlIconClass='tabler-arrow-right' />}
                >
                  Back
                </Button>
                <Button variant='contained' type='submit' endIcon={<i className='tabler-check' />}>
                  Submit
                </Button>
              </Grid>
            </form>
          </Grid>
        )
      default:
        return <Typography>Unknown stepIndex</Typography>
    }
  }

  return (
    <Card>
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const labelProps: {
                error?: boolean
              } = {}

              if (index === activeStep) {
                labelProps.error = false

                if (
                  (verifyErrors.tokenAddress ||
                    verifyErrors.currency ||
                    verifyErrors.fee ||
                    verifyErrors.listing ||
                    verifyErrors.router) &&
                  activeStep === 0
                ) {
                  labelProps.error = true
                } else if (
                  (defiErrors.presaleRate,
                  defiErrors.softCap,
                  defiErrors.hardCap,
                  defiErrors.minBuy,
                  defiErrors.maxBuy,
                  defiErrors.refundType,
                  defiErrors.liquidityPercent,
                  defiErrors.listingRate,
                  defiErrors.startDate,
                  defiErrors.endDate,
                  defiErrors.liquidityType) &&
                  activeStep === 1
                ) {
                  labelProps.error = true
                } else if ((socialErrors.website || socialErrors.desc) && activeStep === 2) {
                  labelProps.error = true
                } else {
                  labelProps.error = false
                }
              }

              return (
                <Step key={index} className='max-md:mbe-5'>
                  <StepLabel {...labelProps} StepIconComponent={StepperCustomDot}>
                    <div className='step-label'>
                      <Typography className='step-number'>{`0${index + 1}`}</Typography>
                      <div>
                        <Typography className='step-title' color='text.primary'>
                          {label.title}
                        </Typography>
                        <Typography className='step-subtitle'>{label.subtitle}</Typography>
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </CardContent>
      <Divider />
      <CardContent>
        {activeStep === steps.length ? (
          <>
            <Typography className='mlb-2 mli-1'>Presale created successfully!</Typography>
            <div className='flex justify-end mt-4'>
              <Button variant='contained' onClick={handleReset}>
                Create another presale
              </Button>
            </div>
          </>
        ) : (
          renderStepContent(activeStep)
        )}
      </CardContent>
    </Card>
  )
}

export default CreatePresale
