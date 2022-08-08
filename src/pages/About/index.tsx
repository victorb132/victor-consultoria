import styled from 'styled-components'
import { Container } from './styles'

const NeonText = styled.p`
  align-self: center;
  font-size: 50px;
  text-align: center;
  opacity: 0.5;
`

export function About() {
  return (
    <Container>
      <NeonText>Este site encontra-se em desenvolvimento</NeonText>
      <NeonText style={{ fontSize: 20 }}>
        para contato: victor96novais@gmail.com
      </NeonText>
    </Container>
  )
}
