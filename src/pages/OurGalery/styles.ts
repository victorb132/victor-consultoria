import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 7rem 0;
  background-color: ${(props) => props.theme.backgroundLight};

  @media (max-width: 768px) {
    padding: 2rem 0;
  }

  .react-photo-album--photo {
    border-radius: 15px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const OurGaleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 10rem;
  margin-top: 50px;
  border-radius: 50%;

  @media (max-width: 768px) {
    margin: 2rem 0;
    padding: 0rem 5rem;
  }
`

export const Title = styled.h1`
  color: ${(props) => props.theme.primary};
  font-weight: 700;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

export const Subtitle = styled.h1`
  color: ${(props) => props.theme.background};
  font-weight: 400;
  font-size: 3rem;
  font-family: 'Montserrat', 'sans-serif';
`

export const ButtonAppointment = styled.a`
  padding: 1.5rem;
  background-color: ${(props) => props.theme.primary};
  border-radius: 5px;
  margin-top: 50px;
  width: 50%;
  align-self: center;
  text-align: center;
  font-size: 25px;

  @media (max-width: 768px) {
    width: 80vw;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    flex-direction: row;
  }
`
