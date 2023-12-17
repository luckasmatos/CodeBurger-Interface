import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.main`
    min-height: 100vh;
    width: 300px;
    background-color: #2F2F2F;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
    padding: 20px;

    hr {
        margin: 50px 0;
        height: 1px;
        width: 100%;
        background-color: #efefef;
    }
`

export const ContainerItems = styled.aside`
    height: 60px;
    display: flex;
    align-items: center;
    background-color: ${props => props.isActive ? '#565656' : 'none'};
    border-radius: 3px;
    padding-left: 20px;
    margin: 5px 0;

    .icon {
        color: #efefef;
    }
`

export const ListLink = styled(Link)`
    font-size: 15px;
    color: #efefef;
    margin-left: 20px;
    text-decoration: none;
`