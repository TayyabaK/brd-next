/*
 ! We do not recommend using your own custom theme built from scratch.
 ! Instead, we recommend using the merged theme (src/components/theme/mergedTheme.ts) and customizing it as per your needs.
 ! If you still want to use your own custom theme, you must be aware about the MUI theme structure along with MUI CSS Variables.
 ! MUI Theme: https://mui.com/material-ui/customization/default-theme/
 ! MUI CSS Variables: https://mui.com/material-ui/experimental-api/css-theme-variables/overview/
 ! Export this file and import it in the `@components/theme/index.tsx` file to use only this theme.
 */

// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
/* Enable following line and the `settings` parameter in the below `userTheme`
   function in order to access `settings` context value in your custom theme object
 */
// import type { Settings } from '@core/contexts/settingsContext'

const userTheme = (/* settings: Settings */): Theme => {
  return {
    // Write your custom theme object here.
    colorSchemes: {
      dark: {
        palette: {
          primary: {
            main: '#7367F0',
            light: '#8F85F3',
            dark: '#675DD8',
            lighterOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.38)'
          },
          secondary: {
            main: '#808390',
            light: '#999CA6',
            dark: '#737682',
            contrastText: '#FFF',
            lighterOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.38)'
          },
          error: {
            main: '#FF4C51',
            light: '#FF7074',
            dark: '#E64449',
            contrastText: '#FFF',
            lighterOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.38)'
          },
          warning: {
            main: '#FF9F43',
            light: '#FFB269',
            dark: '#E68F3C',
            contrastText: '#FFF',
            lighterOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.38)'
          },
          info: {
            main: '#00BAD1',
            light: '#33C8DA',
            dark: '#00A7BC',
            contrastText: '#FFF',
            lighterOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.38)'
          },
          success: {
            main: '#28C76F',
            light: '#53D28C',
            dark: '#24B364',
            contrastText: '#FFF',
            lighterOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.38)'
          },
          text: {
            primary: `rgb(var(--mui-mainColorChannels-dark) / 0.9)`,
            secondary: `rgb(var(--mui-mainColorChannels-dark) / 0.7)`,
            disabled: `rgb(var(--mui-mainColorChannels-dark) / 0.4)`,
            primaryChannel: 'var(--mui-mainColorChannels-dark)',
            secondaryChannel: 'var(--mui-mainColorChannels-dark)'
          },
          divider: `rgb(var(--mui-mainColorChannels-dark) / 0.12)`,
          dividerChannel: 'var(--mui-mainColorChannels-dark)',
          background: {
            default: '#000',
            paper: '#121210',
            paperChannel: '18 18 18'
          },
          action: {
            active: `rgb(var(--mui-mainColorChannels-dark) / 0.6)`,
            hover: `rgb(var(--mui-mainColorChannels-dark) / 0.06)`,
            selected: `rgb(var(--mui-mainColorChannels-dark) / 0.08)`,
            disabled: `rgb(var(--mui-mainColorChannels-dark) / 0.3)`,
            disabledBackground: `rgb(var(--mui-mainColorChannels-dark) / 0.16)`,
            focus: `rgb(var(--mui-mainColorChannels-dark) / 0.1)`,
            focusOpacity: 0.1,
            activeChannel: 'var(--mui-mainColorChannels-dark)',
            selectedChannel: 'var(--mui-mainColorChannels-dark)'
          },
          Alert: {
            errorColor: 'var(--mui-palette-error-main)',
            warningColor: 'var(--mui-palette-warning-main)',
            infoColor: 'var(--mui-palette-info-main)',
            successColor: 'var(--mui-palette-success-main)',
            errorStandardBg: 'var(--mui-palette-error-lightOpacity)',
            warningStandardBg: 'var(--mui-palette-warning-lightOpacity)',
            infoStandardBg: 'var(--mui-palette-info-lightOpacity)',
            successStandardBg: 'var(--mui-palette-success-lightOpacity)',
            errorFilledColor: 'var(--mui-palette-error-contrastText)',
            warningFilledColor: 'var(--mui-palette-warning-contrastText)',
            infoFilledColor: 'var(--mui-palette-info-contrastText)',
            successFilledColor: 'var(--mui-palette-success-contrastText)',
            errorFilledBg: 'var(--mui-palette-error-main)',
            warningFilledBg: 'var(--mui-palette-warning-main)',
            infoFilledBg: 'var(--mui-palette-info-main)',
            successFilledBg: 'var(--mui-palette-success-main)'
          },
          Avatar: {
            defaultBg: '#373B50'
          },
          Chip: {
            defaultBorder: 'var(--mui-palette-divider)'
          },
          FilledInput: {
            bg: 'var(--mui-palette-action-hover)',
            hoverBg: 'var(--mui-palette-action-selected)',
            disabledBg: `var(--mui-palette-action-hover)`
          },
          SnackbarContent: {
            bg: '#F7F4FF',
            color: 'var(--mui-palette-background-paper)'
          },
          Switch: {
            defaultColor: 'var(--mui-palette-common-white)',
            defaultDisabledColor: 'var(--mui-palette-common-white)',
            primaryDisabledColor: 'var(--mui-palette-common-white)',
            secondaryDisabledColor: 'var(--mui-palette-common-white)',
            errorDisabledColor: 'var(--mui-palette-common-white)',
            warningDisabledColor: 'var(--mui-palette-common-white)',
            infoDisabledColor: 'var(--mui-palette-common-white)',
            successDisabledColor: 'var(--mui-palette-common-white)'
          },
          Tooltip: {
            bg: '#F7F4FF'
          },
          TableCell: {
            border: 'var(--mui-palette-divider)'
          },
          customColors: {
            bodyBg: '#25293C',
            chatBg: '#202534',
            greyLightBg: '#353A52',
            inputBorder: `rgb(var(--mui-mainColorChannels-dark) / 0.22)`,
            tableHeaderBg: '#2F3349',
            tooltipText: '#2F3349',
            trackBg: '#3A3F57'
          }
        }
      }
    },
    mainColorChannels: {
      light: '47 43 61',
      dark: '14 237 184',
      lightShadow: '47 43 61',
      darkShadow: '19 17 32'
    },
    customShadows: {
      xs: `0px 1px 6px rgb(var(--mui-mainColorChannels-darkShadow) / 0.16})`,
      sm: `0px 2px 8px rgb(var(--mui-mainColorChannels-darkShadow) / 0.18})`,
      md: `0px 3px 12px rgb(var(--mui-mainColorChannels-darkShadow) / 0.2})`,
      lg: `0px 4px 18px rgb(var(--mui-mainColorChannels-darkShadow) / 0.22})`,
      xl: `0px 5px 30px rgb(var(--mui-mainColorChannels-darkShadow) / 0.24})`,
      primary: {
        sm: '0px 2px 6px rgb(var(--mui-palette-primary-mainChannel) / 0.3)',
        md: '0px 4px 16px rgb(var(--mui-palette-primary-mainChannel) / 0.4)',
        lg: '0px 6px 20px rgb(var(--mui-palette-primary-mainChannel) / 0.5)'
      },
      secondary: {
        sm: '0px 2px 6px rgb(var(--mui-palette-secondary-mainChannel) / 0.3)',
        md: '0px 4px 16px rgb(var(--mui-palette-secondary-mainChannel) / 0.4)',
        lg: '0px 6px 20px rgb(var(--mui-palette-secondary-mainChannel) / 0.5)'
      },
      error: {
        sm: '0px 2px 6px rgb(var(--mui-palette-error-mainChannel) / 0.3)',
        md: '0px 4px 16px rgb(var(--mui-palette-error-mainChannel) / 0.4)',
        lg: '0px 6px 20px rgb(var(--mui-palette-error-mainChannel) / 0.5)'
      },
      warning: {
        sm: '0px 2px 6px rgb(var(--mui-palette-warning-mainChannel) / 0.3)',
        md: '0px 4px 16px rgb(var(--mui-palette-warning-mainChannel) / 0.4)',
        lg: '0px 6px 20px rgb(var(--mui-palette-warning-mainChannel) / 0.5)'
      },
      info: {
        sm: '0px 2px 6px rgb(var(--mui-palette-info-mainChannel) / 0.3)',
        md: '0px 4px 16px rgb(var(--mui-palette-info-mainChannel) / 0.4)',
        lg: '0px 6px 20px rgb(var(--mui-palette-info-mainChannel) / 0.5)'
      },
      success: {
        sm: '0px 2px 6px rgb(var(--mui-palette-success-mainChannel) / 0.3)',
        md: '0px 4px 16px rgb(var(--mui-palette-success-mainChannel) / 0.4)',
        lg: '0px 6px 20px rgb(var(--mui-palette-success-mainChannel) / 0.5)'
      }
    }
  } as Theme
}

export default userTheme
