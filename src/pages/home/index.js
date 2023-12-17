import React from 'react'
import { Container, HomeImg } from './styles'
import HomeImage from '../../assets/home-image.png'
import { CategoryCarousel, OfferCarousel, ToogleMenu } from '../../components'

export function Home() {

    return (
    <Container>
        <ToogleMenu/>
        <HomeImg src={HomeImage} alt='Home image'/>
        <CategoryCarousel/>
        <OfferCarousel/>
    </Container>)
}