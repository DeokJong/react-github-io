import { createFileRoute } from '@tanstack/react-router'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { ArticleColunm, ArticleRow, Buttons, IndexButton } from '@/styles/index'
import ImageBox from '@/components/common/ImageBox'
import { dockerLogo, githubActionLogo, jbnuLogo, MUILogo, postgresSQLLogo, reactLogo, springbootLogo, tanStackQuery, typescriptLogo } from '@/assets/logo'

export const Route = createFileRoute('/_layout/')({
  component: Index,
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
        <Typography variant="h3" gutterBottom>
          {t('index.techStack')}
        </Typography>
        <ArticleRow>
          <ImageBox svg={dockerLogo} link='https://www.docker.com/' alt='Docker'/>
          <ImageBox svg={reactLogo} link='https://ko.react.dev/' alt='React'/>
          <ImageBox svg={typescriptLogo} link='https://www.typescriptlang.org/' alt='TypeScript'/>
          <ImageBox svg={tanStackQuery} link='https://react-query.tanstack.com/' alt='React Query'/>
          <ImageBox svg={MUILogo} link='https://mui.com/' alt='Material-UI'/>
        </ArticleRow>
      </ArticleColunm>
      <ArticleColunm>
        <Typography variant="h3" gutterBottom>
          {t('index.university')}
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          {t('index.major')}
        </Typography>
        <ImageBox svg={jbnuLogo} link='https://www.jbnu.ac.kr/kor/enter.html' alt='JBNU'/>
      </ArticleColunm>
      <ArticleColunm>
        <Typography variant="h3" gutterBottom>
          {t('index.learning')}
        </Typography>
        <ArticleRow>
          <ImageBox svg={springbootLogo} link='https://spring.io/projects/spring-boot' alt='Spring Boot'/>
          <ImageBox svg={postgresSQLLogo} link='https://www.postgresql.org/' alt='PostgreSQL'/>
          <ImageBox svg={githubActionLogo} link='https://docs.github.com/ko/actions' alt='Github Action'/>
        </ArticleRow>
      </ArticleColunm>
    </>
  )
}

export default Index
