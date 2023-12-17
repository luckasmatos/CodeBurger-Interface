import React, { useState, useEffect } from 'react'
import { Container, Box } from '../../components/cartResume/styles'
import { Button } from '../button'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import api from '../../services/api'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

export function CartResume() {

    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryTax, setDeliveryTax] = useState()

    const { cartProducts } = useCart()
    const history = useHistory()

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)

        setFinalPrice(sumAllItems)

        if (sumAllItems === 0) {
            setDeliveryTax(0)
          } else {
            setDeliveryTax(5)
          }
    },[cartProducts, deliveryTax])

    const submitOrder = async () => {
        const order = cartProducts.map(product => {
            return {id: product.id, quantity: product.id}
        })

        await toast.promise(api.post('orders', {products: order}), {
            pending: 'Enviando pedido...',
            success: 'Pedido enviado com sucesso!',
            error: 'Falha no envio do pedido, tente novamente.'
        }) 

        setTimeout(() => {
                history.push('/fim-da-jornada') 
        }, 1500)  
    }

    return (
        <Box>
            <Container>
                <div className='containerTop'>
                    <p className='tittle'>Resumo do Pedido</p>
                    <p className='items'>Itens</p>
                    <p className='itemsPrice'>{formatCurrency(finalPrice)}</p>
                    <p className='deliveryTax'>Taxa de entrega</p>
                    <p className='deliveryTaxPrice'>{formatCurrency(deliveryTax)}</p>
                </div>
                <div className='containerBottom'>
                    <p>Total</p>
                    <p>{formatCurrency(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button style={{marginTop: 20, width: "100%"}} onClick={submitOrder}>Finalizar Pedido</Button>
        </Box>
    )
}