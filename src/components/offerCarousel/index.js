import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { Container, ContainerItems, OfferImg, Button } from './styles'
import Offers from '../../assets/offers.png'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import { useHistory } from 'react-router-dom'

export function OfferCarousel() {

    const {putProductInCart} = useCart()

    const [offers, setOffers] = useState([])

    const {push} = useHistory()

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')

            const isOffer = data.filter( product => product.offer)
            .map( product => {
                return { ...product, formatedPrice: formatCurrency(product.price)}
            })

            setOffers(isOffer)
        }

        loadOffers()
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 475, itemsToShow: 2 },
        { width: 675, itemsToShow: 3 },
        { width: 975, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 }
    ]

    return (
        <Container>
            <img src={Offers} alt='Offer logo' />
            <Carousel itemsToShow={5} style={{width: '95%'}} breakPoints={breakPoints}>
                {
                    offers && offers.map(product => (
                        <ContainerItems key={product.id}>
                            <OfferImg src={product.url} alt='product image'/>
                            <p>{product.name}</p>
                            <p>{product.formatedPrice}</p>
                            <Button onClick={() => {
                                putProductInCart(product)
                                push('/carrinho')
                                }}>Peça agora</Button>
                        </ContainerItems>
                    ))
                }
            </Carousel>
        </Container>
    )
}
