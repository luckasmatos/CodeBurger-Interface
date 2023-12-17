import React, { useEffect, useState } from 'react'
import { Container, Img, EditIcon } from './styles'
import api from '../../../services/api'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CheckIcon from '@mui/icons-material/Check'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import formatCurrency from '../../../utils/formatCurrency'
import { useHistory } from 'react-router-dom'

function ListProducts() {

    const [products, setProducts] = useState([])
    const { push } = useHistory()

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('products')

            setProducts(data)
        }
        loadOrders()
    }, [])

    function isOffer(offerStatus) {
        if(offerStatus) {
            return <CheckIcon/>
        }
        return <CancelOutlinedIcon/>
    }

    function editProduct(product) {
        push('/editar-produto', {product})
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell align='center'>Preço</TableCell>
                            <TableCell align='center'>Oferta</TableCell>
                            <TableCell align='center'>Imagem</TableCell>
                            <TableCell align='center'>Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products && products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell align='center'>{formatCurrency(product.price)}</TableCell>
                                <TableCell align='center'>{isOffer(product.offer)}</TableCell>
                                <TableCell align='center'><Img src={product.url} alt='product image'/></TableCell>
                                <TableCell align='center'><EditIcon onClick={() => editProduct(product)} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ListProducts