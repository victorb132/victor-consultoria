import styled from 'styled-components'

const NeonText = styled.p`
  color: #fff;
  align-self: center;
  font-size: 50px;
  text-align: center;
  opacity: 0.5;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  padding: 10px;
`

export function Home() {
  return (
    <Container>
      <NeonText>Este site encontra-se em desenvolvimento</NeonText>
      <NeonText style={{ fontSize: 20 }}>
        para contato: victor96novais@gmail.com
      </NeonText>
    </Container>
  )
}
