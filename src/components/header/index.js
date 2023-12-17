import React from 'react'
import { useHistory } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'                
import { Container, ContainerLeft, PageLink, ContainerRight, ContainerText, PageLinkExit } from './styles'
import PersonIcon from '../../assets/person-icon.png'
import CartIcon from '../../assets/cart-icon.png'

export function Header() {

    const { logout, userData } = useUser()

    const {push, location: {pathname}} = useHistory()

    function logoutUser() {
        logout()
        push('/login')
    }

    return (
        <Container>
            <ContainerLeft>
                <PageLink onClick={() => push('/')} isActive={pathname === '/'}>Home</PageLink>
                <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('produtos')}>Produtos</PageLink>
            </ContainerLeft>
            <ContainerRight>
                <PageLink onClick={() => push('/carrinho')}><img src={CartIcon} alt='cart icon' /></PageLink>
                <div></div>
                <PageLink><img src={PersonIcon} alt='person icon' /></PageLink>
                <ContainerText>
                    <p>Olá, {userData.name}</p>
                    <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>
        </Container>)
}