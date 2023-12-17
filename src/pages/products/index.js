import React, { useState, useEffect } from 'react'
import { Container, HomeImg, ContainerMenu, CategoryButton, ProductsContainer } from './styles'
import HomeImage from '../../assets/home-image.png'
import api from '../../services/api'
import { CardProducts, ToogleMenu } from '../../components'
import formatCurrency from '../../utils/formatCurrency'

export function Products({ location: { state } }) {
    let categoryId = 0

    if (state?.categoryId) {
        categoryId = state.categoryId
    }

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState(categoryId)

    useEffect(() => {
        async function loadData() {
            try {
                const categoriesResponse = await api.get('categories')
                const allProductsResponse = await api.get('products')

                const newCategories = [{ id: 0, name: 'Todos' }, ...categoriesResponse.data]
                setCategories(newCategories)

                const newProducts = allProductsResponse.data.map(product => ({
                    ...product,
                    formatedPrice: formatCurrency(product.price),
                }))
                setProducts(newProducts)
                setFilteredProducts(newProducts) // Carrega todos os produtos inicialmente
            } catch (error) {
                console.error('Erro ao carregar dados:', error)
            }
        }

        loadData()
    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(product => product.category_id === activeCategory)
            setFilteredProducts(newFilteredProducts)
        }
    }, [activeCategory, products])

    return (
        <Container>
            <ToogleMenu />
            <HomeImg src={HomeImage} alt="Home image" />
            <div>
                <ContainerMenu>
                    {categories.map(category => (
                        <CategoryButton
                            onClick={() => setActiveCategory(category.id)}
                            key={category.id}
                            $isActiveCategory={activeCategory === category.id}
                        >
                            {category.name}
                        </CategoryButton>
                    ))}
                </ContainerMenu>
                <ProductsContainer>
                    {filteredProducts.map(product => (
                        <CardProducts key={product.id} product={product} />
                    ))}
                </ProductsContainer>
            </div>
        </Container>
    )
}
