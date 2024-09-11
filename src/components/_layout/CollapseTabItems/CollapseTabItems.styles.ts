import { Box, List, ListItemButton, styled } from '@mui/material'

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
