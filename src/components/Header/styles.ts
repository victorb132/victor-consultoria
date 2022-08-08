import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1.5rem;
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
      display: flex;
      align-items: center;

      color: white;
      padding-inline: 2rem;

      border: 0.1px solid transparent;
      border-radius: 10%;
      font-weight: 300;

      &:hover {
        transition: border 1s;
        border: 0.1px solid white;
        border-radius: 10%;
      }

      img {
        width: 1.2rem;
        margin-right: 10px;
        margin-top: 10px;
      }
    }
  }
`
