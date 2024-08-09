import { Container } from "./styles"
import FooterLogo from "../../assets/footer logo.svg"

export function Footer() {
  return(
    <Container>
      <img src={FooterLogo} alt="Footer Logo" />

      <p>
        © 2023 - Todos os direitos reservados.
      </p>
    </Container>
  )
}