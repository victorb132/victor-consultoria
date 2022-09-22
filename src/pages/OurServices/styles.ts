import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 7rem 0rem;
  background-color: ${(props) => props.theme.backgroundLight};
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
  color: ${(props) => props.theme.primary};
  font-weight: 700;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 3rem;
`

export const Subtitle = styled.h1`
  color: ${(props) => props.theme.background};
  font-weight: 400;
  font-size: 3rem;
  font-family: 'Montserrat', 'sans-serif';
`
