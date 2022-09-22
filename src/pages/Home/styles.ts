import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 7.5rem 6rem 7.5rem;

  img {
    width: auto;
    height: 30rem;
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
  font-weight: 700;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 3rem;
`

export const Subtitle = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  font-family: 'Montserrat', 'sans-serif';
`

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  font-family: 'Montserrat', 'sans-serif';
`
