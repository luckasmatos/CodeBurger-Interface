import styled from 'styled-components'
import Select from 'react-select'

export const Container = styled.article`
    background-color: #EFEFEF;
    min-height: 100vh;
    padding: 20px;
`

export const Menu = styled.nav`
    display: flex;
    gap: 50px;
    margin: 10px 0 30px 50px;
`

export const LinkMenu = styled.a`
    color: #323D5D;
    cursor: pointer;
    font-weight: ${props => props.isActiveStatus ? 'bold' : '400'};
    position: relative;
    line-height: 30px;

    &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.isActiveStatus ? '100%' : '0'};
    height: 2px;
    background-color: #323D5D;
    transition: width 500ms ease;
  }
`


export const ProductImg = styled.img`
    width: 60px;
    border-radius: 5px;
`

export const SelectStyle = styled(Select)`
    width: 250px;

    .css-13cymwt-control {
        cursor: pointer;
    }

`