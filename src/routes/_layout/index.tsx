import { createFileRoute } from '@tanstack/react-router'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { ArticleColunm, ArticleRow, Buttons, IndexButton } from '@/styles/index'
import ImageBox from '@/components/common/ImageBox'
import { dockerLogo, reactLogo, viteLogo } from '@/assets/logo'

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
      <ArticleColunm>
        <Typography variant="h1" component="h1" gutterBottom>
          {t('index.name')}
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          {t('index.subtitle1')}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {t('index.subtitle2')}
        </Typography>
      </ArticleColunm>
      <Buttons>
        {links.map((link) => (
          <IndexButton key={link.name} href={link.url} size="large">
            {link.name}
          </IndexButton>
        ))}
      </Buttons>
      <ArticleColunm>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('index.skills')}
        </Typography>
        <ArticleRow>
          <ImageBox svg={dockerLogo} />
          <ImageBox svg={reactLogo} />
          <ImageBox svg={viteLogo} />
        </ArticleRow>
      </ArticleColunm>
      <ArticleColunm>MY University</ArticleColunm>
      <ArticleColunm>I&apos;m learning Skills...</ArticleColunm>
    </>
  )
}

export default Index
