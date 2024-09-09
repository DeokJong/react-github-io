import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { useIsDarkThemeAtom } from '@atoms/useIsDarkThemeAtom'

import { routeTree } from '@/routeTree.gen'
import { lightTheme, darkTheme } from '@/theme'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function Main() {
  const { isDarkTheme } = useIsDarkThemeAtom()

  const theme = isDarkTheme ? darkTheme : lightTheme

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<Main />)
