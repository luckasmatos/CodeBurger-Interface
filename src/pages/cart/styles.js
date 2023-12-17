import styled from 'styled-components'

export const Container = styled.article`
    background-color: black;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const InformationsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 80px 0;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 550px) {
        margin: 40px 0;
    }
`

export const HomeImg = styled.img`
    width: 100%;

    @media screen and (max-width: 700px) {
      width: auto;
      height: 175px;
    }
`
