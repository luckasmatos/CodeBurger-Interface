import React from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import { Container, LoginImage, LoginBox, LogoImage, Label, Input, SignUpLink, StyledLink, ButtonStyles } from './styles'
import { ErrorMessage } from '../../components'
import api from '../../services/api'
import LoginImg from '../../assets/login-image.png'
import LogoImg from '../../assets/logo-image.png'

export function Login() {

    const history = useHistory()

    const { putUserData } = useUser()

    const schema = Yup.object().shape({
        email: Yup.string().email("Digite um e-mail válido!").required("Preenchimento obrigatório!"),
        password: Yup.string("a").required("Preenchimento obrigatório!"),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })

    const onSubmit = async clientData => {
        const { data } = await toast.promise(
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password,
            }),
            {
                pending: 'Verificando dados',
                success: 'Seja bem-vindo!',
                error: 'Erro de autenticação. Verifique seus dados!'
            }
        )

        putUserData(data) 

        setTimeout(() => {
            if(data.admin) {
                history.push('/pedidos') 
            } else {
                history.push('/')
            }
        }, 1500)   
    }

    return (
        <Container>
            <LoginImage src={LoginImg} alt='Login-image' />
            <LoginBox>
                <div>
                    <LogoImage src={LogoImg} alt='Logo-image' />
                </div>
                <h1>Login</h1>
                <form noValidate  onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type='email' error={errors.email?.message} {...register("email")}/>
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                    <Label>Senha</Label>
                    <Input type='password' error={errors.password?.message} {...register("password")}/>
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>
                    <ButtonStyles type="submit">Entrar</ButtonStyles>
                </form>
                <SignUpLink>Não possui conta? <StyledLink to='/cadastro'>Cadastrar</StyledLink></SignUpLink>
            </LoginBox>
        </Container>
    )
}