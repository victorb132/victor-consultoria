import { useAllPrismicDocumentsByType } from '@prismicio/react'
import { useEffect, useState } from 'react'
import {
  Container,
  AboutContainer,
  Title,
  Subtitle,
  TextContainer,
  Text,
} from './styles'

export function About() {
  const [documents, { state }] = useAllPrismicDocumentsByType('aboutus')
  const [aboutUs, setAboutUs] = useState({
    title: '',
    subTitle: '',
    text: '',
    image: '',
  })

  const prismicData = ({ data }: any) => {
    setAboutUs({
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
      <AboutContainer>
        <img src={aboutUs.image} alt="Imagem de uma barbeiro" />
        <TextContainer>
          <Title>{aboutUs.title}</Title>
          <Subtitle>{aboutUs.subTitle}</Subtitle>
          <Text>{aboutUs.text}</Text>
        </TextContainer>
      </AboutContainer>
    </Container>
  )
}
