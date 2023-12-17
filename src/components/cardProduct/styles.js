import styled from 'styled-components'
import { Button } from '../index'

export const Container = styled.section`
    border-radius: 20px;
    background-color: #EEE;
    display: flex;
    gap: 12px;
    padding: 16px;
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.03);
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media screen and (max-width: 900px) {
            height: 130px;
        }

        @media screen and (max-width: 450px) {
            height: 110px;
        }
    }

    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 10px;
        border-radius: 16px;
    }
`

export const ProductImage = styled.img`
    width: 150px;
    border-radius: 10px;

    @media screen and (max-width: 900px) {
        width: 150px;
    }

    @media screen and (max-width: 450px) {
        width: 125px;
    }
`

export const ProductName = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    display: flex;
    max-width: 200px;

    @media screen and (max-width: 900px) {
        max-width: 150px;
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
        max-width: 125px;
    }
`

export const ProductPrice = styled.p`
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    margin-top: 30px;

    @media screen and (max-width: 900px) {
        margin-top: 0;
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
    }
`

export const ButtonStyled = styled(Button)`
    @media screen and (max-width: 900px) {
        width: 150px;
    }

    @media screen and (max-width: 450px) {
        width: 125px;
    }
`