import logo from '../../assets/logo-honoris-branco.png'
import { useRef } from 'react'

import { Container, ButtonAppointment } from './styles'

export function Header() {
  const ourService = useRef(null)

  const scrollToSection = (elementRef: any) => {
    console.log(elementRef)
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <Container>
      <img src={logo} alt="Logo" />
      <nav>
        <a>Início</a>
        <a>Sobre</a>
        <a>Portfólio</a>
        <a onClick={() => scrollToSection(ourService)}>Serviços</a>
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
