import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 8rem;

  img {
    width: 3rem;
    height: 3rem;
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
  }
`

export const ButtonAppointment = styled.button`
  padding: 0.3rem;
`
