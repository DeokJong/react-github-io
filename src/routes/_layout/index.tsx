import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@mui/material'
import { useIsDarkThemeAtom } from '@atoms/useIsDarkThemeAtom'

export const Route = createFileRoute('/_layout/')({
  component: () => {
    const { setIsDarkTheme } = useIsDarkThemeAtom()

    const toggleTheme = () => {
      setIsDarkTheme((prevMode) => !prevMode)
    }

    return (
      <div>
        <h1>Hello world</h1>
        <Button variant="contained" onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </div>
    )
  },
})
