import React from "react"
import logoImg from "../../Assets/logo.svg"
import { Container, Content } from "./styles"
export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="DT Money" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  )
}