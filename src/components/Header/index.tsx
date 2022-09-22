import logo from '../../assets/logo-honoris-branco.png'

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
      <ButtonAppointment
        type="button"
        onClick={() =>
          window
            .open(
              'https://admin.frizzar.com.br/app/barbeariahonoris?acao=passo1',
              '_blank',
            )
            ?.focus()
        }
      >
        Agendar
      </ButtonAppointment>
    </Container>
  )
}
