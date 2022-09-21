import { useAllPrismicDocumentsByType } from '@prismicio/react'
import { useEffect, useState } from 'react'
import {
  Container,
  TextContainer,
  ServiceContainer,
  Title,
  Subtitle,
} from './styles'
import { Services } from '../../components/Services'

export function OurServices() {
  const [documents, { state }] = useAllPrismicDocumentsByType('ourservices')
  const [ourService, setOurService] = useState({
    title: '',
    subTitle: '',
    services: [],
  })

  const prismicData = ({ data }: any) => {
    setOurService({
      title: data.title[0].text,
      subTitle: data.subtitle[0].text,
      services: data.services,
    })
  }

  useEffect(() => {
    if (state === 'loaded' && documents?.length) {
      prismicData(documents[0])
    }
  }, [documents, state])

  return (
    <Container>
      <TextContainer>
        <Subtitle>{ourService?.subTitle}</Subtitle>
        <Title>{ourService?.title}</Title>
      </TextContainer>
      <ServiceContainer>
        {ourService?.services?.map((service, index) => (
          <Services data={service} key={index} />
        ))}
      </ServiceContainer>
    </Container>
  )
}
