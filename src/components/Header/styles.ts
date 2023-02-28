import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 8rem;

  @media (max-width: 768px) {
    padding: 1rem 3rem;
  }

  img {
    width: auto;
    height: 3rem;

    @media (max-width: 768px) {
      height: 5rem;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;

    a {
      display: flex;
      align-items: center;

      color: white;

      font-weight: 300;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`

export const ButtonAppointment = styled.a`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.primary};
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`
