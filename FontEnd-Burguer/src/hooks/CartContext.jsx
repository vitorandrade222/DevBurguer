// Regras de negócio
// - Produto chegou
// - SE SIM
//   - Aumenta a quantidade dele
// - SE NÂO 
//   - Adicione ele ao carrinho 

import { useContext, createContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([])

  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)

    let newProductsInCart = []

    if (cartIndex >= 0) {
      newProductsInCart = cartProducts.map((prd) =>
        prd.id === product.id
          ? { ...prd, quantity: prd.quantity + 1 }
          : prd
      )
    } else {
      newProductsInCart = [...cartProducts, { ...product, quantity: 1 }]
    }

    setCartProducts(newProductsInCart)
    updatedLocalStorage(newProductsInCart)
  }


  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId)
    setCartProducts(newCart)
    updatedLocalStorage(newCart)
  }

  const clearCart = () => {
    setCartProducts([])
    updatedLocalStorage([])
  }

  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 }
        : prd
    })
    setCartProducts(newCart)
    updatedLocalStorage(newCart)
  }

  const decreaseProduct = (productId) => {

    //{ Encontrar o item -> Tirar 1 de quantidade ->
    // SE o item for igual 1 de quantity 
    // - Não fazer nada ->
    //   ou
    // - Deletar o produto do carrinho }

    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) => {
        return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 }
          : prd
      })

      setCartProducts(newCart)
      updatedLocalStorage(newCart)
    } else {
      deleteProduct(productId)
    }
  }

  const updatedLocalStorage = (products) => {
    localStorage.setItem('devburguer:cartInfo', JSON.stringify(products))
  }

  useEffect(() => {
    const clientCartData = localStorage.getItem('devburguer:cartInfo')

    if (clientCartData) {
      setCartProducts(JSON.parse(clientCartData))
    }
  }, [])

  const cartTotal = cartProducts.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0)

  const cartQuantity = cartProducts.reduce((total, product) => {
    return total + product.quantity
  }, 0)

  return (
    <CartContext.Provider value={{
      cartProducts,
      putProductInCart,
      deleteProduct,
      clearCart,
      increaseProduct,
      decreaseProduct,
      cartTotal,
      cartQuantity
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}