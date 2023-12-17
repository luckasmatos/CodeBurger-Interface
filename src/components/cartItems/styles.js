import styled from 'styled-components'

export const Container = styled.article`
    background-color: white;
    box-shadow: 0px 10px 40px 0px rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    padding: 10px 10px 0 10px;
    margin-bottom: 50px;

    @media screen and (max-width: 550px) {
        margin-bottom: 40px;
    }
`

export const Header = styled.header`
    display: flex;
    gap: 10px 15px;
    border-bottom: 1px solid rgb(214,155,12);
    margin-bottom: 20px;

    p {
        color: rgb(120, 120, 120);
        font-size: 16px;
        display: flex;
        justify-content: center;
        width: 120px;
        padding-bottom: 5px;

        @media screen and (max-width: 750px) {
            width: 100px;
            font-size: 14px;
        }

        @media screen and (max-width: 550px) {
            width: 60px;
            font-size: 12px;
        }
    }

    @media screen and (max-width: 750px) {
        gap: 10px 5px;
    }

    @media screen and (max-width: 550px) {
        gap: 10px 2px;
    }
`

export const BoxItems = styled.section`
    display: flex;
    gap: 10px 15px;
    padding-bottom: 16px;
    text-align: center;
    height: 120px;

    img {
        width: 120px;
        border-radius: 10px;

        @media screen and (max-width: 750px) {
            width: 100px;
            height: 100px;
        }

        @media screen and (max-width: 550px) {
            width: 60px;
            height: 60px;
        }
    }

    p {
        font-size: 16px;
        word-break: break-word;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 120px;

        @media screen and (max-width: 750px) {
            width: 100px;
            height: 100px;
            font-size: 14px;
        }

        @media screen and (max-width: 550px) {
            width: 60px;
            height: 60px;
            font-size: 10px;
        }
    }

    .quantityContainer {
        display: flex;
        justify-content: center;
        width: 120px;
        height: 120px;

        p {
            width: 20px;
        }

        button {
            height: 120px;
            background: transparent;
            border: none;
            font-size: 22px;
            width: 35px;
            cursor: pointer;

            @media screen and (max-width: 750px) {
                width: 100px;
                height: 100px;
                font-size: 14px;
            }

            @media screen and (max-width: 550px) {
                width: 60px;
                height: 60px;
                font-size: 12px;
            }
        }

        @media screen and (max-width: 750px) {
            width: 100px;
            font-size: 14px;
        }

        @media screen and (max-width: 550px) {
            width: 60px;
            font-size: 10px;
        }
    }

    @media screen and (max-width: 750px) {
        gap: 10px 5px;
        height: 100px;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 550px) {
        gap: 10px 2px;
        height: 60px;  
    }
`

export const EmptyCart = styled.p`
    padding: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
`
