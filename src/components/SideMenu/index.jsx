import { Container, Button } from "./styles"
import { X } from "@phosphor-icons/react";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  return (
    <Container data-menu-is-open={menuIsOpen}>
      {
        menuIsOpen &&
        <Button onClick={onCloseMenu}>
          <X />
        </Button>
      }
      <h1>Menu</h1>
      <input/>

      <a href="/">
        Sair
      </a>

    </Container>
  )
}