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
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  font-size: 1rem;
  margin-top: 20px;
`

export const Subtitle = styled.h1`
  color: ${(props) => props.theme.background};
  font-weight: 300;
  font-size: 1rem;
  text-align: center;
`
