import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7rem 0rem;
`

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0rem 0rem 0rem 5rem;
  align-items: center;

  img {
    width: 40rem;
    height: 30rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 30rem;
`

export const Title = styled.h1`
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
  font-family: 'Merienda', 'sans-serif';
  font-size: 2rem;
  letter-spacing: 2px;
`

export const Subtitle = styled.h1`
  font-weight: 300;
  font-size: 2rem;
  font-family: 'Merienda';
  margin-top: 10px;
`

export const Text = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  letter-spacing: 2px;
`
