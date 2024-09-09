import { createFileRoute } from '@tanstack/react-router'
import { Typography } from '@mui/material'
import { Article, Buttons, IndexButton } from '@styles/'

export const Route = createFileRoute('/_layout/')({
  component: index,
})

type link = {
  name: string
  url: string
}
const links: link[] = [
  {
    name: 'GITHUB',
    url: 'https://github.com/DeokJong',
  },
  {
    name: 'THIS PROJECT',
    url: 'https://github.com/DeokJong/DeokJong.github.io'
  },
]

function index() {
  return (
    <>
      <Article>
        <Typography variant="h1" component="h1" gutterBottom>
          진덕종
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Full Stack Web Developer
        </Typography>
        <Typography variant="h6" color="textSecondary">
          I&rsquo;m a full stack web developer with a passion for creating web applications.
        </Typography>
      </Article>
      <Buttons>
        {links.map((link) => (
          <IndexButton key={link.name} href={link.url}>
            {link.name}
          </IndexButton>
        ))}
      </Buttons>
    </>
  )
}
