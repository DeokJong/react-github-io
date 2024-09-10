import { createFileRoute } from '@tanstack/react-router'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { Article, Buttons, IndexButton } from '@/styles/index'

export const Route = createFileRoute('/_layout/')({
  component: Index, // 컴포넌트 이름은 대문자로 시작
})

type Link = {
  name: string
  url: string
}

const links: Link[] = [
  {
    name: 'GITHUB',
    url: 'https://github.com/DeokJong',
  },
  {
    name: 'THIS PROJECT',
    url: 'https://github.com/DeokJong/DeokJong.github.io',
  },
]

function Index() {
  const { t } = useTranslation()

  return (
    <>
      <Article>
        <Typography variant="h1" component="h1" gutterBottom>
          {t('index.name')}
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          {t('index.subtitle1')}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {t('index.subtitle2')}
        </Typography>
      </Article>
      <Buttons>
        {links.map((link) => (
          <IndexButton key={link.name} href={link.url} size="large">
            {link.name}
          </IndexButton>
        ))}
      </Buttons>
    </>
  )
}

export default Index
