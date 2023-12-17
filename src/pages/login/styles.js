import styled from 'styled-components'
import Background from '../../assets/background-image.png'
import { Link } from 'react-router-dom'
import { Button } from '../../components'

export const Container = styled.article`
    width: 100%;
    min-height: 100vh;
    background: url('${Background}');
    background-size: cover;
    background-position: center bottom;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LoginImage = styled.img`
    height: 450px;
    opacity: 0.9;

    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const LoginBox = styled.section`
    height: 450px;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 0 10px 10px 0;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0;

    h1 {
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        text-align: center;
        color: #FFF;
    }

    div {
        display: flex;
        justify-content: center;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 800px) {
        border-radius: 10px;
    }

    @media screen and (max-width: 400px) {
        min-height: 100vh;
        width: 100%;
        margin: 0;
    }
`

export const LogoImage = styled.img`
    height: 140px;
    margin-bottom: 20px;  
`

export const Label = styled.label`
    font-size: 13px;
    font-weight: 400;
    line-height: 14px;
    color: white;
    margin-top: 15px;
    margin-bottom: 5px;
`

export const Input = styled.input`
    box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
    border: ${props => props.error ? '1px solid red' : 'none'};
    width: 280px;
    height: 25px;
    border-radius: 4px;
    padding-left: 10px;
    font-size: 13px;
    font-weight: 700;
    line-height: 14px;

    @media screen and (max-width: 350px) {
        width: 100%;
    }
`

export const SignUpLink = styled.p`
    font-size: 13px;
    font-weight: 400;
    line-height: 14px;
    color: white;
    margin-top: 20px;
`

export const StyledLink = styled(Link)`
    cursor: pointer;
    text-decoration: underline;
    color: white;
`

export const ButtonStyles = styled(Button)`
    margin-top: 20px;

    @media screen and (max-width: 350px) {
        width: 100%;
    }
`
