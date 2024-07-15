// React Imports
import { useContext } from 'react'
import { SettingsContext } from '@core/contexts/settingsContext'

// Context Imports

export const useSettings = () => {
  // Hooks
  const context = useContext(SettingsContext)

  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }

  return context
}
