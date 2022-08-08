import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 2rem 1rem;
  justify-content: center;
  height: 100vh;

  img {
    width: 3rem;
    height: 3rem;
    margin-bottom: 1rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: white;
      padding-inline: 2.5rem;

      border: 1px solid transparent;
      border-radius: 10%;

      &:hover {
        transition: border 1s;
        border: 1px solid white;
        border-radius: 10%;
      }
    }
  }
`
