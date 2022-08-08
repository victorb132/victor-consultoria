import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export function DeafultLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}
