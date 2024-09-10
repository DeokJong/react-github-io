import { atom, useAtom } from 'jotai'

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return false
}

const isDarkThemeAtom = atom(getInitialTheme())

export const useIsDarkThemeAtom = () => {
  const [isDarkTheme, setIsDarkTheme] = useAtom(isDarkThemeAtom)
  return { isDarkTheme, setIsDarkTheme }
}
