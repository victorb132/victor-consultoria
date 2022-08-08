import logo from '../../assets/logo.svg'

import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <nav>
        <a>Início</a>
        <a>Sobre</a>
        <a>Portfólio</a>
        <a>Serviços</a>
        <a>Contato</a>
      </nav>
    </Container>
  )
}
