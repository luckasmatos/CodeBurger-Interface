import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import paths from '../../constants/paths'

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.Order,
        icon: ShoppingBagOutlinedIcon
    },
    {
        id: 2,
        label: 'Produtos',
        link: paths.Products,
        icon: ShoppingCartOutlinedIcon
    },
    {
        id: 3,
        label: 'Novo Produto',
        link: paths.NewProduct,
        icon: AddOutlinedIcon
    }
]

export default listLinks