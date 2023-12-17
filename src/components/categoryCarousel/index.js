import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { Container, ContainerItems, CategoryImg, Button } from './styles'
import Categories from '../../assets/categories.png'
import api from '../../services/api'

export function CategoryCarousel() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')
            setCategories(data)
        }

        loadCategories()
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
            <img src={Categories} alt='Categories logo' />
            <Carousel itemsToShow={5} style={{width: '95%'}} breakPoints={breakPoints}>
                {
                    categories && categories.map(category => (
                        <ContainerItems key={category.id}>
                            <CategoryImg src={category.url} alt='category image'/>
                            <Button to={{
                                pathname: '/produtos',
                                state: {categoryId: category.id}
                            }}>{category.name}</Button>
                        </ContainerItems>
                    ))
                }
            </Carousel>
        </Container>
    )
}
