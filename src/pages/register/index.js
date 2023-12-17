import React from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Container, RegisterImage, BoxItens, LogoImage, Label, Input, SignUpLink, StyledLink, ButtonStyles } from './styles'
import { ErrorMessage } from '../../components'
import api from '../../services/api'
import RegisterImg from '../../assets/register-image.png'
import LogoImg from '../../assets/logo-image.png'

export function Register() {

    const schema = Yup.object().shape({
        name: Yup.string().required("Preenchimento obrigatório!"),
        email: Yup.string().email("Digite um e-mail válido!").required("Preenchimento obrigatório!"),
        password: Yup.string().required("Preenchimento obrigatório!").min(6, "Mínimo de 6 caracteres!"),
        confirmPassword: Yup.string().required("Preenchimento obrigatório!").oneOf([Yup.ref('password')], "As senhas devem ser iguais!"),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })

    const onSubmit = async clientData => {
        try {
            const { status } = await api.post('users', {
                name: clientData.name,
                email: clientData.email,
                password: clientData.password,
            },
            { validateStatus: () => true }
            )

            if( status === 200 || status === 201 ) {
                toast.success('Cadastro criado com sucesso!', {
                    autoClose: 2500,
                    pauseOnHover: false,
                    theme: "dark",
                })
            }
            else if( status === 409 ) {
                toast.error('E-mail já cadastrado!', {
                    autoClose: 2500,
                    pauseOnHover: false,
                    theme: "dark",
                })
            }
            else {
                throw new Error()
            }
        }
        catch(err) {
            toast.error('Falha no servidor, tente novamente!', {
                autoClose: 2500,
                pauseOnHover: false,
                theme: "dark",
            })
        }
    }

    return (
        <Container>
            <RegisterImage src={RegisterImg} alt='Register-image' />
            <BoxItens>
                <div>
                    <LogoImage src={LogoImg} alt='Logo-image' />
                </div>
                <h1>Cadastre-se</h1>
                <form noValidate  onSubmit={handleSubmit(onSubmit)}>
                    <Label error={errors.name?.message}>Nome</Label>
                    <Input type='text' error={errors.name?.message} {...register("name")}/>
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label error={errors.email?.message}>Email</Label>
                    <Input type='email' error={errors.email?.message} {...register("email")}/>
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label error={errors.password?.message}>Senha</Label>
                    <Input type='password' error={errors.password?.message} {...register("password")}/>
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Label error={errors.confirmPassword?.message}>Confirmar senha</Label>
                    <Input type='password' error={errors.confirmPassword?.message} {...register("confirmPassword")}/>
                    <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                    <ButtonStyles type="submit">Cadastrar</ButtonStyles>
                </form>
                <SignUpLink>Já possui conta? <StyledLink to='/login'>Entrar</StyledLink></SignUpLink>
            </BoxItens>
        </Container>
    )
}