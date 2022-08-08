import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
`
export const Title = styled.h1`
  color: ${(props) => props.theme.secondary};
`

export const Subtitle = styled.h2`
  font-weight: 100;
`
