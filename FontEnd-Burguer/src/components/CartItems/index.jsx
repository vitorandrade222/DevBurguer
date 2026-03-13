import { useCart } from "../../hooks/CartContext"
import { formatPrice } from "../../utils/formatPrice"
import { Table } from "../index"

import Trash from "../../assets/trash.svg"
import { ButtonGroup, ProductImage, TotalPrice, TrashImage } from "./styles"
import { useNavigate } from "react-router-dom";

export function CartItems() {
  const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart()

  const navigate = useNavigate()
  console.log(cartProducts)
  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} />
              </Table.Td>
              <Table.Td> {product.name} </Table.Td>
              <Table.Td> {product.currencyValue} </Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <button onClick={() => decreaseProduct(product.id)}>-</button>
                  {product.quantity}
                  <button onClick={() => increaseProduct(product.id)}>+</button>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                <TotalPrice>
                  {formatPrice(product.quantity * product.price)}
                </TotalPrice>
              </Table.Td>
              <Table.Td>
                <TrashImage src={Trash} alt="lixeira" onClick={() => deleteProduct(product.id)} />
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <Table.Tr>
            <Table.Td colSpan={6}>
              Seu carrinho está vazio
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Body>
    </Table.Root>
  )
}