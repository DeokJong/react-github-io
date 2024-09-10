import { Box, Button, styled } from '@mui/material'

export const Buttons = styled(Box)`
  margin: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`

export const IndexButton = styled(Button)`
  margin: 1rem;
  width: 10rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`
