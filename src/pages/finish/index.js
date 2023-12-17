import React from 'react'
import {Container, PrincipalText, LinksText, LinksContainer, LinkIcon, StyledButton, LinkButton, Footer} from './styles'
import PixelHeart from '../../assets/pixel-heart.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export function Finish() {

    return (
        <Container>
            <img src={PixelHeart}/>
            <PrincipalText>Obrigado por visitar o projeto CodeBurger!</PrincipalText>
            <LinksText>Não deixe de me seguir e deixar o feedback de sua experiência através dos links abaixo:</LinksText>
            <LinksContainer>
                <LinkIcon href='https://www.linkedin.com/in/luckas-matos/' target='_blank'><LinkedInIcon className='icon'/></LinkIcon>
                <LinkIcon href='https://github.com/luckasmatos' target='_blank'><GitHubIcon className='icon'/></LinkIcon>
                <LinkIcon href='https://api.whatsapp.com/send?phone=5541998174755' target='_blank'><WhatsAppIcon className='icon'/></LinkIcon>
            </LinksContainer>
            <StyledButton><LinkButton to='/'>Voltar ao início</LinkButton></StyledButton>
            <Footer>Desenvolvido por Luckas Matos</Footer>
        </Container>)
}