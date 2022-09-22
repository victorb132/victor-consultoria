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
  padding: 0rem 2rem 0rem 2rem;
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
  color: ${(props) => props.theme.primary};
  font-weight: 700;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 2rem;
  letter-spacing: 2px;
`

export const Subtitle = styled.h1`
  font-weight: 400;
  font-size: 2rem;
  font-family: 'Montserrat', 'sans-serif';
  margin-top: 10px;
`

export const Text = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 300;
  font-family: 'Montserrat', 'sans-serif';
  letter-spacing: 2px;
`
