import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 7rem 0rem;
  background-color: ${(props) => props.theme.backgroundLight};

  .react-photo-album--photo {
    border-radius: 15px;
  }
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
