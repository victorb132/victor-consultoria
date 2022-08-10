import { useAllPrismicDocumentsByType } from '@prismicio/react'
import { useEffect, useState } from 'react'
import { Container, Title, Subtitle } from './styles'

export function Home() {
  const [documents, { state }] = useAllPrismicDocumentsByType('home')
  const [header, setHeader] = useState({
    title: '',
    subTitle: '',
  })

  const prismicData = ({ data }: any) => {
    setHeader({
      title: data.title[0].text,
      subTitle: data.subtitle[0].text,
    })
  }

  useEffect(() => {
    if (state === 'loaded' && documents?.length) {
      prismicData(documents[0])
    }
  }, [documents, state])

  return (
    <Container>
      <Subtitle>{header.subTitle}</Subtitle>
      <Title>{header.title}</Title>
    </Container>
  )
}
