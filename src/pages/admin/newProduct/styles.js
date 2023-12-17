import styled from 'styled-components'
import { Button } from '../../../components/button'

export const Container = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        background-color: #2F2F2F;
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
        border-radius: 6px;
        padding: 30px;
        width: 400px;
    }
`

export const Label = styled.label`
    font-size: 14px;
    color: #efefef;
    margin: 15px 0 3px 10px;
`

export const Input = styled.input`
    height: 38px;
    padding-left: 10px;
    border-radius: 3px;
    font-size: 16px;
    color: #333333;
    border: none;
    background-color: #efefef;
    box-shadow: 0px 4px 14px rgba(0,0,0,0.1);
    margin-bottom: 2px;
`

export const ButtonStyle = styled(Button)`
    width: 100%;
    margin-top: 25px;
    height: 38px;
`

export const LabelUpload = styled.label`
    height: 38px;
    font-size: 14px;
    color: #efefef;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px dashed #efefef;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 3px;

    input {
        opacity: 0;
        width: 1px;
    }
`