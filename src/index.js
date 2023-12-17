import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import GlobalStyles from './styles/globalStyles'
import AppProvider from './hooks'
import Routes from './routes/routes'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render( <> <AppProvider> <Routes/> </AppProvider> <ToastContainer autoClose={1500}/> <GlobalStyles/> </>)
