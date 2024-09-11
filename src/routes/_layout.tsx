import { useState } from 'react'
import { Menu, MenuItem } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { isMobile } from 'react-device-detect'

import {
  LayoutBox,
  LayoutToolbar,
  LayoutTabs,
  LayoutTab,
  MaterialUISwitch,
  LayoutContextBox,
  LanguageSvgIcon,
  RightItems,
  LayoutFormControlLabel,
  LanguageSvgIconWrapper,
  LayoutToolbarItemsWarrper,
} from '@/styles/index'
import { useIsDarkThemeAtom } from '@/atoms/useIsDarkThemeAtom'
import supportedLanguages from '@/i18n/supportedLanguages'
import CollapseTabItems from '@/components/_layout'

export const Route = createFileRoute('/_layout')({
  component: _Layout,
})

const tabContents = [
  ['Item 1-1', 'Item 1-2', 'Item 1-3'],
  ['Item 2-1', 'Item 2-2', 'Item 2-3'],
  ['Item 3-1', 'Item 3-2', 'Item 3-3'],
  ['Item 4-1', 'Item 4-2', 'Item 4-3'],
  ['Item 5-1', 'Item 5-2', 'Item 5-3'],
]

function _Layout() {
  const { isDarkTheme, setIsDarkTheme } = useIsDarkThemeAtom()
  const [tabIndex, setTabIndex] = useState(0)
  const [isTabDetail, setIsTabDetail] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null) // 메뉴 앵커
  const { i18n } = useTranslation() // i18n 훅

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    if (!isTabDetail) {
      setIsTabDetail((prevState) => !prevState)
      if (!event) {
        console.log('event is null')
      }
    }
    setTabIndex(newValue)
  }

  const handleTabClick = (index: number) => {
    if (index === tabIndex) {
      setIsTabDetail((prevState) => !prevState)
    }
  }

  const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkTheme(event.target.checked)
  }

  const handleLanguageOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLanguageClose = () => {
    setAnchorEl(null)
  }

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode)
    handleLanguageClose()
  }

  return (
    <LayoutBox>
      <LayoutToolbar>
        <LayoutToolbarItemsWarrper>
          <LayoutTabs
            value={tabIndex}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            {tabContents.map((_, index) => (
              <LayoutTab
                key={index}
                label={`Tab ${index + 1}`}
                onClick={() => handleTabClick(index)}
              />
            ))}
          </LayoutTabs>
          <RightItems>
            {!isMobile && (
              <LayoutFormControlLabel
                control={
                  <MaterialUISwitch sx={{ m: 1 }} checked={isDarkTheme} onChange={toggleTheme} />
                }
                label={''}
              />
            )}
            <LanguageSvgIconWrapper onClick={handleLanguageOpen}>
              <LanguageSvgIcon>
                <LanguageIcon />
              </LanguageSvgIcon>
            </LanguageSvgIconWrapper>
            <Menu
              id="language-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleLanguageClose}
            >
              {supportedLanguages.map((lang) => (
                <MenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
                  {lang.label}
                </MenuItem>
              ))}
            </Menu>
          </RightItems>
        </LayoutToolbarItemsWarrper>
        <CollapseTabItems tabIndex={tabIndex} isTabDetail={isTabDetail} />
      </LayoutToolbar>
      <LayoutContextBox>
        <Outlet />
      </LayoutContextBox>
    </LayoutBox>
  )
}

export default _Layout
