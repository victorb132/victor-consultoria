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

export const OurGaleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0rem 10rem;
  margin-top: 50px;
  border-radius: 50%;
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
