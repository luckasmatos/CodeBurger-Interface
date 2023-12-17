import React from 'react'
import Orders from './orders'
import { Container, ContainerItems } from './styles'
import { SideMenuAdmin } from '../../components'
import ListProducts from './products'
import paths from '../../constants/paths'
import NewProduct from './newProduct'
import EditProduct from './editProduct'

export function Admin({location: {pathname}}) {

    return (
        <Container>
            <SideMenuAdmin path={pathname}/>
            <ContainerItems>
                {pathname === paths.Order && <Orders/>}
                {pathname === paths.Products && <ListProducts/>} 
                {pathname === paths.NewProduct && <NewProduct/>} 
                {pathname === paths.EditProduct && <EditProduct/>} 
            </ContainerItems>
        </Container>

    )
}