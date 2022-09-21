import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 7rem 0rem;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: space-around;
  margin-top: 50px;
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
