import {
  Container,
  Separator,
  FooterInc,
  Title,
  ContainerContact,
  Contact,
} from './styles'

import instagram from '../../assets/icons/instagram.png'
import whatsapp from '../../assets/icons/whatsapp.png'

export function Contacts() {
  return (
    <Container>
      <Title>Contatos</Title>
      <ContainerContact>
        <Contact
          type="button"
          onClick={() =>
            window
              .open('https://www.instagram.com/barbeariahonoris/', '_blank')
              ?.focus()
          }
        >
          <img src={instagram} alt="Instagram" />
        </Contact>
        <Contact
          type="button"
          onClick={() =>
            window.open('https://wa.me/+5511988471825', '_blank')?.focus()
          }
        >
          <img src={whatsapp} alt="Whatsapp" />
        </Contact>
      </ContainerContact>
      <Separator />
      <FooterInc>
        Copyright &copy; 2022 Barbearia Honoris. All Rights Reserved.
      </FooterInc>
    </Container>
  )
}
