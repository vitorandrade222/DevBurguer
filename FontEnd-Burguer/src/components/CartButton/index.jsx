import Cart from '../../assets/cart.svg'
import { ContainerButtton } from './styles'

export function CartButton(props) {
  return (
    <ContainerButtton {...props}>
      <img src={Cart} alt="carrinho-de-compras" />
    </ContainerButtton>
  )
}

