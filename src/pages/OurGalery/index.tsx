import { useAllPrismicDocumentsByType } from '@prismicio/react'
import { useEffect, useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import {
  Container,
  TextContainer,
  OurGaleryContainer,
  Title,
  Subtitle,
  ButtonAppointment,
} from './styles'

export function OurGalery() {
  const [documents, { state }] = useAllPrismicDocumentsByType('ourgalery')
  const [ourGalery, setOurGalery] = useState({
    title: '',
    subTitle: '',
    galery: [],
  })

  const prismicData = ({ data }: any) => {
    const photos: any = []

    data.galery.map((galery: any) => {
      return photos.push({
        width: 250,
        height: 250,
        src: galery.image.url,
      })
    })

    setOurGalery({
      title: data.title[0].text,
      subTitle: data.subtitle[0].text,
      galery: photos,
    })
  }

  console.log(ourGalery)

  useEffect(() => {
    if (state === 'loaded' && documents?.length) {
      prismicData(documents[0])
    }
  }, [documents, state])

  return (
    <Container>
      <TextContainer>
        <Subtitle>{ourGalery?.subTitle}</Subtitle>
        <Title>{ourGalery?.title}</Title>
      </TextContainer>
      <OurGaleryContainer>
        <PhotoAlbum photos={ourGalery.galery} columns={4} layout="masonry" />
        <ButtonAppointment
          type="button"
          onClick={() =>
            window
              .open('https://www.instagram.com/barbeariahonoris/', '_blank')
              ?.focus()
          }
        >
          Ver Mais +
        </ButtonAppointment>
      </OurGaleryContainer>
    </Container>
  )
}
