import styled from 'styled-components'
import {Button} from '../../components'
import { Link } from 'react-router-dom'

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    position: relative;

    img {
        width: 300px;
        height: auto;

        @media screen and (max-width: 500px) {
            width: 200px;
            height: auto;
        }
    }
`

export const PrincipalText = styled.p`
    color: rgb(214,155,12);
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0 30px 0;
    text-align: center;
    width: 100%;
    padding: 0 20px;

    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
`

export const LinksText = styled.p`
    color: white;
    max-width: 500px;
    padding: 0 20px;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;

    @media screen and (max-width: 500px) {
        font-size: 15px;
    }
`

export const LinksContainer = styled.div`
    display: flex;
    gap: 0 30px;

    @media screen and (max-width: 500px) {
        gap: 0 15px;
    }
`

export const LinkIcon = styled.a`
    background-color: white;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    margin-bottom: 30px;

    .icon {
        width: 50px;
        height: 50px;
        color: black;

        @media screen and (max-width: 500px) {
            width: 40px;
            height: 40px;
        }
    }

    &:hover {
        transform: scale(1.08);   
    }

    @media screen and (max-width: 500px) {
        width: 40px;
        height: 40px;
    }
`

export const Footer = styled.footer`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    background-color: rgb(214,155,12);
    font-size: 12px;
    font-weight: 500;
    position: absolute;
    bottom: 0;
`

export const StyledButton = styled(Button)`
    margin-bottom: 60px;
`

export const LinkButton = styled(Link)`
    text-decoration: none;
    color: black;
`