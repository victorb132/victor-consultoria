import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.background};
  padding: 5rem 7.5rem 6rem 7.5rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

export const Title = styled.h3`
  margin-bottom: 20px;
  color: ${(props) => props.theme.backgroundLight};
  font-weight: 400;
  font-family: 'Montserrat', 'sans-serif';
`

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: row;
`

export const Contact = styled.a`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.backgroundLight};
  margin-bottom: 50px;
  margin-right: 20px;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`

export const Separator = styled.div`
  height: 2px;
  width: 45%;
  background-color: ${(props) => props.theme.backgroundLight};
`

export const FooterInc = styled.p`
  margin-top: 20px;
  opacity: 0.5;
  color: ${(props) => props.theme.backgroundLight};
  font-weight: 300;
  font-family: 'Montserrat', 'sans-serif';
`
