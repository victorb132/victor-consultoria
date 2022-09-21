import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 15rem;

  img {
    width: 5rem;
    height: 5rem;
  }
`

export const Title = styled.h1`
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
  font-size: 1rem;
`

export const Subtitle = styled.h1`
  font-weight: 300;
  font-size: 1rem;
  text-align: center;
`
