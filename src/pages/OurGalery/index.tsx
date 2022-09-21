import { useAllPrismicDocumentsByType } from '@prismicio/react'
import { useEffect, useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import {
  Container,
  TextContainer,
  OurGaleryContainer,
  Title,
  Subtitle,
} from './styles'
import { Galery } from '../../components/Galery'

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
        <PhotoAlbum
          photos={ourGalery.galery}
          columns={3}
          layout="masonry"
          spacing={100}
        />
      </OurGaleryContainer>
    </Container>
  )
}
