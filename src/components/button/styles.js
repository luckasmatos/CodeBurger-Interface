import styled from 'styled-components'

export const PrincipalButton = styled.button`
    width: 200px;
    height: 30px;
    border: none;
    border-radius: 15px;
    background-color: rgb(214,155,12);
    font-size: 15px;
    font-weight: 500;
    line-height: 15px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 0.8;
    }
    `