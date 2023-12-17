import React, { useState } from 'react'
import { ToggleMenuContainer, MenuButton, MenuContent, UserContainer, UserIcon, PageLink, LinkContainer, LogoutLink } from './styles'
import { useUser } from '../../hooks/UserContext'
import { useHistory } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';



export function ToogleMenu() {
    const [menuOpen, setMenuOpen] = useState(false)

    const { logout, userData } = useUser()

    const { push, location: { pathname } } = useHistory()

    function logoutUser() {
        logout()
        push('/login')
    }

    function handleMenuToggle() {
        setMenuOpen(!menuOpen)
    }

    return (
        <ToggleMenuContainer>
            <MenuButton onClick={handleMenuToggle}>{menuOpen ? '✕' : '☰'}</MenuButton>
            <MenuContent open={menuOpen}>
                <UserContainer>
                    <UserIcon />
                    <div>
                        <p>Olá, {userData.name}</p>
                    </div>
                </UserContainer>
                <LinkContainer>
                    <PageLink onClick={() => push('/')} isActive={pathname === '/'}><HomeOutlinedIcon />Home</PageLink>
                    <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('produtos')}><ShoppingBagOutlinedIcon />Produtos</PageLink>
                    <PageLink onClick={() => push('/carrinho')} isActive={pathname === '/carrinho'}><ShoppingCartOutlinedIcon />Carrinho</PageLink>
                </LinkContainer>
                <LogoutLink onClick={logoutUser}>Sair<LogoutOutlinedIcon/></LogoutLink>
            </MenuContent>
        </ToggleMenuContainer>
    );
};

