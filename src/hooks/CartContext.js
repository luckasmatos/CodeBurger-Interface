import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(() => {
    const clientCartData = localStorage.getItem('codeburger:cartInfo')
    return clientCartData ? JSON.parse(clientCartData) : []
  })

  async function putProductInCart(product) {
    const cartIndex = cartProducts.findIndex((pdt) => pdt.id === product.id)

    let newCartProducts = []

    if (cartIndex >= 0) {
      newCartProducts = [...cartProducts]

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1

      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }

    localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCartProducts))
  }

  const deleteProduct = (productId) => {
    const newCarts = cartProducts.filter((product) => product.id !== productId)
    setCartProducts(newCarts)
    localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCarts))
  }

  const increaseProducts = (ProductId) => {
    const newCart = cartProducts.map((product) =>
      product.id === ProductId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    )
    setCartProducts(newCart)
    localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCart))
  }

  const decreaseProducts = (ProductId) => {
    const cartIndex = cartProducts.findIndex((pdt) => pdt.id === ProductId)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) =>
        product.id === ProductId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )

      setCartProducts(newCart)
      localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCart))
    } else {
      deleteProduct(ProductId)
    }
  }

  useEffect(() => {
    async function loadUserData() {
      const clientCartData = localStorage.getItem('codeburger:cartInfo')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }

    loadUserData()
  }, [])

  return (
    <CartContext.Provider
      value={{ putProductInCart, cartProducts, increaseProducts, decreaseProducts }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useUser must be used with UserContext')
  }

  return context
}
