import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    gradients?: {
      desktop?: string
      mobile?: string
      tablet?: string
      nav?: string
      lightblueComponent?: string
      // You can add more gradient definitions here if needed
    }
  }
  interface Palette {
    gradients: {
      desktop: string
      mobile: string
      tablet: string
      nav: string
      lightblueComponent: string
      // Match the PaletteOptions gradients structure
    }
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  }
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
})
