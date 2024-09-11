import React from 'react'
import { Collapse } from '@mui/material'
import { useNavigate } from '@tanstack/react-router'

import { tabsItemContents } from '../tabContent'

import { LayoutTabDetailList, LayoutTabDetailListItem } from './CollapseTabItems.styles'

type CollapseTabItemsProps = {
  tabIndex: number
  isTabDetail: boolean
}

const CollapseTabItems: React.FC<CollapseTabItemsProps> = ({ isTabDetail, tabIndex }) => {
  const navigate = useNavigate()

  const handleItemClick = (path: string) => {
    navigate({
      to: path,
    })
  }

  return (
    <Collapse in={isTabDetail} timeout={300} unmountOnExit>
      <LayoutTabDetailList>
        <LayoutTabDetailList>
          {tabsItemContents[tabIndex].map((item, index) => (
            <LayoutTabDetailListItem key={index} onClick={() => handleItemClick(item.path)}>
              {item.title}
            </LayoutTabDetailListItem>
          ))}
        </LayoutTabDetailList>
      </LayoutTabDetailList>
    </Collapse>
  )
}

export default CollapseTabItems
