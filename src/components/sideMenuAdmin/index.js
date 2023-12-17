import React from 'react'

import { Container, ContainerItems, ListLink } from './styles'
import listLinks from './menuList'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { useUser } from '../../hooks/UserContext'


export function SideMenuAdmin(path) {

    const { logout } = useUser()
    return (
        <Container>
            <hr></hr>
            {listLinks.map(item => (
                <ContainerItems key={item.id} isActive={path.path === item.link}>
                    <item.icon className='icon'/>
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ContainerItems>
            ))}
            <hr></hr>
            <ContainerItems style={{ position: 'fixed', bottom: '20px' }}>
                <LogoutOutlinedIcon style={{ color: '#efefef' }} />
                <ListLink to='/login' onClick={logout}>Sair</ListLink>
            </ContainerItems>
        </Container>)
}