import { Container } from "./styles"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { SideMenu } from "../../components/SideMenu"
import { useState } from "react"
import { Ingredient } from "../../components/Ingredient"
import { CaretLeft, Plus, Minus } from "@phosphor-icons/react";
import SaladaRavanello from "../../assets/Mask group.png"

export function Details() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return(
    <>
      <SideMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        />
      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <Container>
        <a href="/">
          <CaretLeft />
          <span>Voltar</span>
        </a>

        <div>
        <img src={SaladaRavanello} alt="Imagem do Prato" />

        <h1>
          Salada Ravanello
        </h1>

        <p>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
        </p>

          <Ingredient title="Abobora"/>
          <Ingredient title="Abobora"/>
          <Ingredient title="Abobora"/>
          <Ingredient title="Abobora"/>
          <Ingredient title="Abobora"/>
        </div>

        <div id="buttons">
          <div id="counter">
            <Plus />
            <span>01</span>
            <Minus />
          <Button title="Pedir" />
          </div>
        </div>
    </Container>
    </>
  )
}