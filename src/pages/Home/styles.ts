import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    width: auto;
    height: 20rem;

    @media (max-width: 768px) {
      height: 10rem;
      margin: 2rem 0 0 0;
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 25rem;
`

export const Title = styled.h1`
  color: ${(props) => props.theme.primary};
  font: 700 3rem;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 3rem;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
`

export const Subtitle = styled.h1`
  font-weight: 400;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 3rem;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  font-family: 'Montserrat', 'sans-serif';
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`
