import {
  Banner,
  Container,
  Content,
  Title
} from './styles'

import logo from '../../assets/Logo 1.svg'
import { CartItems, CartResume } from '../../components'

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={logo} alt="logo devburguer" />
      </Banner>
      <Title> Checkout - Pedido  </Title>
      <Content>
        <CartItems />
        <CartResume />
      </Content>

    </Container>
  )
}


// aula 39 - logica do  carrinho 3:23 