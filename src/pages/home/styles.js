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

export const HomeImg = styled.img`
    width: 100%;

    @media screen and (max-width: 700px) {
      width: auto;
      height: 175px;
    }
`