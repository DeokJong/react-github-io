import React from 'react'
import { Box, SxProps, Theme } from '@mui/material'
import { isMobile } from 'react-device-detect'

type ImageBoxProps = {
  svg: string
  alt?: string
  link?: string
} & React.ImgHTMLAttributes<HTMLImageElement>

const ImageBox: React.FC<ImageBoxProps> = ({ svg, alt, link, ...rest }) => {
  const commonStyles: SxProps<Theme> = {
    width: isMobile ? '48px' : '100px',
    height: 'auto',
    marginX: '0.5rem',
  }

  const imageElement = (
    <img src={svg} alt={alt || 'SVG image'} style={{ width: '100%', height: 'auto' }} {...rest} />
  )

  return link
    ? <Box
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      sx={commonStyles}
      onClick={(e) => e.stopPropagation()}
    >
      {imageElement}
    </Box>
    : <Box component="img" src={svg} alt={alt || 'SVG image'} sx={commonStyles} {...rest} />
}

export default ImageBox
