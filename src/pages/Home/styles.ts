import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
`
export const Title = styled.h1`
  color: ${(props) => props.theme.secondary};
  font-weight: 300;
`

export const Subtitle = styled.h2`
  font-weight: 100;
`
