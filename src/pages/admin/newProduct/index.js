import React, { useEffect, useState } from 'react'
import { Container, Label, Input, ButtonStyle, LabelUpload } from './styles'
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

function NewProduct() {

    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const { push } = useHistory()

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        price: Yup.string().required('Digite o preço do produto'),
        category: Yup.object().required('Selecione a categoria do produto'),
        file: Yup.mixed().test('required', 'Selecione a imagem do produto', value => {
            return value && value.length > 0
        })
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

        await toast.promise(api.post('products', productDataFormData),{
            pending: 'Salvando novo produto...',
            success: 'Produto salvo com sucesso!',
            error: 'Falha ao salvar novo produto'
        })
        setTimeout(() => {
            push('/listar-produtos')
        }, 2000);
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
                <Input type='text' {...register('name')} />
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
                <Label>Preço:</Label>
                <Input type='number' {...register("price")} />
                <ErrorMessage>{errors.price?.message}</ErrorMessage>
                <Label>Categoria do produto:</Label>
                <Controller
                    name='category'
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
                <ButtonStyle>Adicionar Produto</ButtonStyle>
            </form>
        </Container>
    )
}

export default NewProduct