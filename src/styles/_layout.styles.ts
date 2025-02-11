/* eslint-disable max-len */
import {
  Box,
  Divider,
  FormControlLabel,
  List,
  ListItemButton,
  styled,
  SvgIcon,
  Switch,
  Tab,
  Tabs,
  Toolbar,
} from '@mui/material'

export const LayoutBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LayoutToolbarItemsWarrper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`

export const LayoutToolbar = styled(Toolbar)`
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.primary.main};
`

export const LayoutTabs = styled(Tabs)(({ theme }) => ({
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
  color: theme.palette.primary.contrastText,
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.contrastText,
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '40px',
    left: '0%',
    transform: 'translateX(0%)',
    width: '90%',
  },
}))

export const LayoutTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  borderRadius: '8px',
  margin: '0.2rem',
  padding: '0.5rem',
  '&.Mui-selected': {
    color: theme.palette.primary.contrastText,
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    margin: '0.1rem',
    padding: '0rem',
    minWidth: '60px',
  },
}))

export const RightItems = styled(Box)`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const LayoutFormControlLabel = styled(FormControlLabel)`
  display: flex;
  align-items: center;
`

export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}))

export const LanguageSvgIconWrapper = styled(Box)`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`

export const LanguageSvgIcon = styled(SvgIcon)`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`

export const LayoutTabListBox = styled(Box)`
  width: 100%;
  margin-top: 1;
  display: flex;
  justify-content: center;
`

export const LayoutTabDetailList = styled(List)`
  display: flex;
  flex-direction: row;
  padding: 1rem;
`

export const LayoutTabDetailListItem = styled(ListItemButton)`
  display: inline;
  width: auto;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`

export const LayoutDivider = styled(Divider)`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: 2px;
`

export const LayoutContextBox = styled(Box)`
  margin: 4rem;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
