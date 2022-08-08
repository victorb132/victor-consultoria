import logo from '../../assets/logo.svg'

import home from '../../assets/icons/home.svg'
import about from '../../assets/icons/about.svg'
import contact from '../../assets/icons/contact.svg'
import projects from '../../assets/icons/projects.svg'
import service from '../../assets/icons/service.svg'

import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <nav>
        <a>
          <img src={home} alt="Logo" />
          Início
        </a>
        <a>
          <img src={about} alt="Logo" />
          Sobre
        </a>
        <a>
          <img src={projects} alt="Logo" />
          Portfólio
        </a>
        <a>
          <img src={service} alt="Logo" />
          Serviços
        </a>
        <a>
          <img src={contact} alt="Logo" />
          Contato
        </a>
      </nav>
    </Container>
  )
}
