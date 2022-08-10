import { useAllPrismicDocumentsByType } from '@prismicio/react'
import { useEffect, useState } from 'react'
import { Container, Title, Subtitle } from './styles'

interface HomePrismic {
  data: {
    title: [
      {
        text: string
      },
    ]
    subtitle: [
      {
        text: string
      },
    ]
  }
}

export function Home() {
  const [documents, { state, error }] = useAllPrismicDocumentsByType('home')
  const [header, setHeader] = useState({
    title: '',
    subTitle: '',
  })

  console.log('result', state)
  console.log('result', error)

  useEffect(() => {
    if (state === 'loaded') {
      setHeader({
        title: documents[0].data.title[0].text,
        subTitle: documents[0].data.subtitle[0].text,
      })
    }
  }, [documents, state])

  return (
    <Container>
      <Subtitle>{header.subTitle}</Subtitle>
      <Title>{header.title}</Title>
    </Container>
  )
}
