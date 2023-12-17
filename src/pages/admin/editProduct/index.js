import React, { useEffect, useState } from 'react'
import { Container, Label, Input, ButtonStyle, LabelUpload, ContainerInput } from './styles'
import api from '../../../services/api'
import Select from 'react-select'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import { ErrorMessage } from '../../../components'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined'

function EditProduct() {

    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const { push, location } = useHistory()

    const product = location && location.state ? location.state.product : null

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        price: Yup.string().required('Digite o preço do produto'),
        category: Yup.object().required('Selecione a categoria do produto'),
        offer: Yup.bool()
    })

    const { register, handleSubmit, control, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async data => {
        const productDataFormData = new FormData()
        productDataFormData.append('name', data.name)
        productDataFormData.append('price', data.price)
        productDataFormData.append('category_id', data.category.id)
        productDataFormData.append('file', data.file[0])
        productDataFormData.append('offer', data.offer)

        await toast.promise(api.put(`products/${product.id}`, productDataFormData), {
            pending: 'Editando novo produto...',
            success: 'Produto salvo com sucesso!',
            error: 'Falha ao salvar o produto',
            autoClose: 500,
        })

        setTimeout(() => {
            push('/listar-produtos')
        }, 1500);
    }

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')
            setCategories(data)
        }
        loadCategories()
    }, [])

    const customStyles = {
        menu: (provided) => ({
            ...provided,
            backgroundColor: 'white',
        }),
        option: (provided) => ({
            ...provided,
            backgroundColor: 'none',
            color: 'black',
            '&:hover': {
                backgroundColor: 'rgb(214,155,12)',
            }
        }),
        control: (baseStyles, state) => {
            ('baseStyles:', baseStyles)
            return {
                ...baseStyles,
                borderColor: 'none',
                border: state.isFocused ? '2px solid rgb(214,155,12)' : 'none',
                backgroundColor: '#efefef',
                marginBottom: '3px',
                boxShadow: 'none',
                height: '38px',
                cursor: 'pointer',
                transition: 'none',
                '&:hover': {
                    border: '2px solid rgb(214,155,12)',
                }
            }
        }
    }

    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label>Nome do produto:</Label>
                <Input type='text' {...register('name')} defaultValue={product.name} />
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
                <Label>Preço:</Label>
                <Input type='number' {...register("price")} defaultValue={product.price} />
                <ErrorMessage>{errors.price?.message}</ErrorMessage>
                <Label>Categoria do produto:</Label>
                <Controller
                    name='category'
                    defaultValue={product.category}
                    control={control}
                    render={({ field }) => {
                        return (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={cat => cat.name}
                                getOptionValue={cat => cat.id}
                                placeholder=''
                                styles={customStyles}
                                defaultValue={product.category}
                            />
                        )
                    }}
                >
                </Controller>
                <ErrorMessage>{errors.category?.message}</ErrorMessage>
                <LabelUpload>
                    {
                        fileName ?
                            (
                                <>
                                    <PermMediaOutlinedIcon style={{ marginRight: '10' }} />
                                    {fileName}
                                </>
                            ) : (
                                <>
                                    <CloudUploadIcon style={{ marginRight: '10' }} />
                                    Carregar imagem...
                                </>
                            )
                    }
                    <input
                        type='file'
                        accept='image/png, image/jpg, image/jpeg'
                        {...register("file")}
                        onChange={value => {
                            setFileName(value.target.files[0]?.name)
                        }}
                    />
                </LabelUpload>
                <ErrorMessage>{errors.file?.message}</ErrorMessage>
                <ContainerInput>
                <input
                    type='checkbox'
                    {...register("offer")}
                    defaultChecked={product.offer}
                />
                <label>Produto em oferta</label>
                </ContainerInput>
                <ButtonStyle>Editar Produto</ButtonStyle>
            </form>
        </Container>
    )
}

export default EditProduct