import { Container, ImageContainer } from './styles'
import PhotoAlbum from 'react-photo-album'

export function Galery({ data }: any) {
  console.log(data.image)

  return (
    <Container>
      <ImageContainer>
        <PhotoAlbum photos={data.image.url} layout="rows" />
      </ImageContainer>
    </Container>
  )
}
