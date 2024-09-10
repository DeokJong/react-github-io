import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'

import { useIsDarkThemeAtom } from '@/atoms/useIsDarkThemeAtom'
import { lightTheme, darkTheme } from '@/theme'
import { routeTree } from '@/routeTree.gen'
import initI18n from '@/i18n/i18n'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function Main() {
  const { isDarkTheme } = useIsDarkThemeAtom()
  const theme = isDarkTheme ? darkTheme : lightTheme
  const [isI18nInitialized, setIsI18nInitialized] = useState(false)

  useEffect(() => {
    const initializeI18n = async () => {
      const userLang = window.navigator.language

      await initI18n(userLang)
      setIsI18nInitialized(true)
    }

    initializeI18n()
  }, [])

  if (!isI18nInitialized) {
    return <div>Loading translations...</div>
  }

  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </I18nextProvider>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<Main />)
