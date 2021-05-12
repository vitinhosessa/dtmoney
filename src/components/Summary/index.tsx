import incomeImg from "../../Assets/income.svg"
import outcomeImg from "../../Assets/outcome.svg"
import totalImg from "../../Assets/total.svg"
import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>

        <strong>R$100,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>

        <strong>- R$50,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>

        <strong>R$50,00</strong>
      </div>
    </Container>
  )
}