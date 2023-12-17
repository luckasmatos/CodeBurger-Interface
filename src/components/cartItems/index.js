import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, BoxItems, EmptyCart } from './styles'


export function CartItems() {

    const { cartProducts, increaseProducts, decreaseProducts } = useCart()

    return (
        <Container>
                <Header>
                    <p></p>
                    <p>Itens</p>
                    <p>Preço</p>
                    <p>Quantidade</p>
                    <p>Total</p>
                </Header>
                {cartProducts && cartProducts.length > 0 ? cartProducts.map(product => (
                    <BoxItems key={product.id}>
                        <img src={product.url} alt='Product image' />
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <div className='quantityContainer'>
                            <button onClick={() => decreaseProducts(product.id)}>-</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => increaseProducts(product.id)}>+</button>
                        </div>
                        <p>{formatCurrency(product.quantity * product.price)}</p>
                    </BoxItems>
                ))
                    : <EmptyCart>Carrinho vazio</EmptyCart>
                }
        </Container>)
}