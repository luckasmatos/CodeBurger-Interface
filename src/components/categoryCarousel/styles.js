import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.article`
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    gap: 35px;
    width: 100%;

    .rec.rec-arrow {
        background-color: #000;
        color: rgb(214,155,12);
        border: 1px solid rgb(214,155,12);
        box-shadow: 0px 0px 15px 0px rgba(214,155,12, 0.25);
    } 

    .rec.rec-arrow:hover {
        background-color: rgb(214,155,12);
        color: #000;
    }
    
    .rec.rec-arrow:disabled {
        background-color: rgb(30,30,30);
        color: #000;
        border: none;
        box-shadow: none;
    }

    .rec-dot {
        background-color: #000;
        border: 1px solid rgb(214,155,12);
    }

    .rec-dot:hover {
        box-shadow: 0px 0px 2px 2px rgba(214,155,12, 0.25);
    }

    .rec-dot_active {
        background-color: rgb(214,155,12);
        border: 1px solid #000;
        box-shadow: 0px 0px 2px 2px rgba(214,155,12, 0.5);
    }
`

export const ContainerItems = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CategoryImg = styled.img`
    width: 220px;
    border-radius: 10px;
    margin-bottom: 20px;
    
    @media screen and (max-width: 400px) {
        width: 160px;
    }

    @media screen and (max-width: 315px) {
        width: 120px;
    }
`

export const Button = styled(Link)`
    width: 220px;
    height: 40px;
    border: none;
    border-radius: 15px;
    background-color: rgb(214,155,12);
    box-shadow: 0px 0px 10px 2px rgba(214,155,12, 0.25);
    font-size: 15px;
    font-weight: 500;
    line-height: 15px;
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 15px;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 0.8;
    }

    @media screen and (max-width: 400px) {
        width: 160px;
    }

    @media screen and (max-width: 315px) {
        width: 120px;
    }
`