import { Container, Title, Subtitle, CardContainer } from './styles'

export function Services({ data }: any) {
  console.log(data)

  return (
    <Container>
      <CardContainer>
        <img src={data.icon.url} alt="Icone" />
        <Title>{data.title1[0].text}</Title>
        <Subtitle>{data.subtitle1[0].text}</Subtitle>
      </CardContainer>
    </Container>
  )
}
