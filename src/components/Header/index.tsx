import logo from '../../assets/logo.svg'

import { Container, ButtonAppointment } from './styles'

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <nav>
        <a>Início</a>
        <a>Sobre</a>
        <a>Portfólio</a>
        <a>Serviços</a>
      </nav>
      <ButtonAppointment type="button">Agendar</ButtonAppointment>
    </Container>
  )
}
