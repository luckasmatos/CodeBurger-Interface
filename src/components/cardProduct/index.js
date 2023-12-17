import React from 'react'
import { Container, ProductImage, ProductName, ProductPrice, ButtonStyled } from './styles'
import { useCart } from '../../hooks/CartContext'
import { useHistory } from 'react-router-dom'

export function CardProducts({ product }) {

    const { putProductInCart } = useCart()
    const { push } = useHistory()

    return (
        <Container>
            <ProductImage src={product.url} alt='Product image' />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <ButtonStyled onClick={() => {
                    putProductInCart(product)
                    push('/carrinho')
                }}>Adicionar</ButtonStyled>
            </div>
        </Container>
    )
}