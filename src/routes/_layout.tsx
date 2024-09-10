import { useState } from 'react'
import { Box, Collapse, Menu, MenuItem } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import {
  LayoutBox,
  LayoutToolbar,
  LayoutTabListBox,
  LayoutTabDetailList,
  LayoutTabs,
  LayoutTab,
  LayoutDivider,
  MaterialUISwitch,
  LayoutContextBox,
  LayoutTabDetailListItem,
  LayoutFormControlLabel,
  LanguageSvgIcon,
} from '@/styles/index'
import { useIsDarkThemeAtom } from '@/atoms/useIsDarkThemeAtom'
import supportedLanguages from '@/i18n/supportedLanguages'

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

  // 드롭다운 메뉴 열기
  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  // 드롭다운 메뉴 닫기
  const handleClose = () => {
    setAnchorEl(null)
  }

  // 언어 변경
  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode) // 선택한 언어로 변경
    handleClose() // 메뉴 닫기
  }

  return (
    <LayoutBox>
      <LayoutToolbar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            position: 'relative',
          }}
        >
          <LayoutTabs value={tabIndex} onChange={handleTabChange}>
            {tabContents.map((_, index) => (
              <LayoutTab
                key={index}
                label={`Tab ${index + 1}`}
                onClick={() => handleTabClick(index)}
              />
            ))}
          </LayoutTabs>
          <>
            <LayoutFormControlLabel
              control={
                <MaterialUISwitch sx={{ m: 1 }} checked={isDarkTheme} onChange={toggleTheme} />
              }
              label={''}
            />
            {/* Box로 감싸 HTMLElement 이벤트 트리거 */}
            <Box onClick={handleLanguageClick} sx={{ cursor: 'pointer' }}>
              <LanguageSvgIcon>
                <LanguageIcon />
              </LanguageSvgIcon>
            </Box>
            <Menu
              id="language-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {supportedLanguages.map((lang) => (
                <MenuItem
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  {lang.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        </Box>
        <Collapse in={isTabDetail} timeout={300} unmountOnExit>
          <LayoutTabListBox>
            <LayoutTabDetailList>
              {tabContents[tabIndex].map((item, index) => (
                <LayoutTabDetailListItem
                  key={index}
                  onClick={() => {
                    console.log('click', item)
                  }}
                >
                  {item}
                </LayoutTabDetailListItem>
              ))}
            </LayoutTabDetailList>
          </LayoutTabListBox>
        </Collapse>
      </LayoutToolbar>
      <LayoutDivider />
      <LayoutContextBox>
        <Outlet />
      </LayoutContextBox>
    </LayoutBox>
  )
}

export default _Layout
