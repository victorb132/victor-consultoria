import { useAllPrismicDocumentsByType } from '@prismicio/react'
import { useEffect, useState } from 'react'
import {
  Container,
  HomeContainer,
  TextContainer,
  Title,
  Subtitle,
  Text,
} from './styles'
import { OurServices } from '../OurServices'

export function Home() {
  const [documents, { state }] = useAllPrismicDocumentsByType('home')
  const [header, setHeader] = useState({
    title: '',
    subTitle: '',
    text: '',
    image: '',
  })

  const prismicData = ({ data }: any) => {
    setHeader({
      title: data.title[0].text,
      subTitle: data.subtitle[0].text,
      text: data.text[0].text,
      image: data.image.url,
    })
  }

  useEffect(() => {
    if (state === 'loaded' && documents?.length) {
      prismicData(documents[0])
    }
  }, [documents, state])

  return (
    <Container>
      <HomeContainer>
        <TextContainer>
          <Title>{header.title}</Title>
          <Subtitle>{header.subTitle}</Subtitle>
          <Text>{header.text}</Text>
        </TextContainer>
        <img src={header.image} alt="Imagem de uma barbeiro" />
      </HomeContainer>
      <OurServices />
    </Container>
  )
}
