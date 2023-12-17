import React from 'react'
import { Container, HomeImg, InformationsContainer } from './styles'
import HomeImage from '../../assets/home-image.png'
import { CartItems, CartResume, ToogleMenu } from '../../components'

export function Cart() {

    return (
        <Container>
            <ToogleMenu/>
            <HomeImg src={HomeImage} alt='Home image' />
            <InformationsContainer>
                <CartItems />
                <CartResume />
            </InformationsContainer>
        </Container>)
}