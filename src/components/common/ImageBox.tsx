import React from 'react'
import { Box } from '@mui/material'
import { isMobile } from 'react-device-detect'

type ImageBoxProps = {
  svg: string
  alt?: string
} & React.ImgHTMLAttributes<HTMLImageElement>

const ImageBox: React.FC<ImageBoxProps> = ({ svg, alt, ...rest }) => {
  return (
    <Box
      component="img"
      src={svg}
      alt={alt || 'SVG image'}
      {...rest}
      sx={{
        width: isMobile ? 'auto' : '100px',
        height: 'auto',
        marginX: '0.5rem',
      }}
    />
  )
}

export default ImageBox
