import { Box, Button, styled } from '@mui/material'

export const Buttons = styled(Box)`
  margin: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

export const IndexButton = styled(Button)(({ theme }) => ({
  margin: '1rem',
  width: '10rem',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}))
