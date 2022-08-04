import { GlobalStyle } from './styles/global';
import styled from 'styled-components';

const NeonText = styled.p`
  color: #fff;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #000,
    0 0 82px #000,
    0 0 92px #000,
    0 0 102px #000,
    0 0 151px #000;
  align-self: center;
  font-size: 50px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  background-color: black;
`;


export function App() {
  return (
    <Container>
        <NeonText>
          Este site encontra-se em desenvolvimento
        </NeonText>
        <NeonText style={{ fontSize: 20}}>
          para contato: victor96novais@gmail.com
        </NeonText>
      <GlobalStyle />
    </Container>
  )
}


