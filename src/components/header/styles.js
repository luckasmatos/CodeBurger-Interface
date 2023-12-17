import styled from 'styled-components'

export const Container = styled.header`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(214,155,12);

    @media screen and (max-width: 475px) {
        display: none;
  }
`

export const ContainerLeft = styled.nav`
    display: flex;
    gap: 30px;
    margin-left: 150px;

    @media screen and (max-width: 600px) {
        margin-left: 30px;
    }
`

export const PageLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-size: 16px;
    font-weight: ${props => props.isActive ? 'bold' : 400};
    line-height: 19px;

    img {
        height: 30px;
    }
`

export const ContainerRight = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 50px;

    div {
        width: 0.5px;
        height: 40px;
        background-color: #000;
    }

    @media screen and (max-width: 600px) {
        margin-right: 30px;
    }
`

export const ContainerText = styled.section`

    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
    }
`

export const PageLinkExit = styled.a`
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    cursor: pointer;
`

export const MenuStyled = styled.div`
    color: white;
`