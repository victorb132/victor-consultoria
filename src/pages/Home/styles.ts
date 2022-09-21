import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 4rem 0rem 7.5rem;

  img {
    width: 30rem;
    height: 30rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  overflow: hidden;
  width: 25rem;
`

export const Title = styled.h1`
  color: ${(props) => props.theme.secondary};
  font-weight: 300;
  font-family: 'Merienda', 'sans-serif';
  font-size: 3rem;
`

export const Subtitle = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  font-family: 'Merienda';
`

export const Text = styled.p`
  font-size: 1.2rem;
`
