import { Box, Collapse } from '@mui/material'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useState } from 'react'
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
} from '@styles/'
import { useIsDarkThemeAtom } from '@atoms/useIsDarkThemeAtom'

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

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    if (!isTabDetail) {
      setIsTabDetail((prevState) => !prevState)
    }
    setTabIndex(newValue)
    console.log('event', event.currentTarget)
  }

  const handleTabClick = (index: number) => {
    if (index === tabIndex) {
      setIsTabDetail((prevState) => !prevState)
    }
  }

  const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkTheme(event.target.checked)
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
          <LayoutFormControlLabel
            control={
              <MaterialUISwitch sx={{ m: 1 }} checked={isDarkTheme} onChange={toggleTheme} />
            }
            label="테마 전환"
          />
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
