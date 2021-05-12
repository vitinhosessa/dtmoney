import logoImg from "../../Assets/logo.svg"
import { Container, Content } from "./styles"

interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: IHeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="DT Money" />
        <button 
          type="button"
          onClick={onOpenNewTransactionModal}
        >
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}