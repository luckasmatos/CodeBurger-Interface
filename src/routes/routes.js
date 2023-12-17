import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import paths from '../constants/paths'

import PrivateRoute from './private-route'
import { Login, Register, Home, Products, Cart, Admin, Finish } from '../pages'

function Routes() {
    return(
        <Router>
            <Switch>
                <Route component={Login} path='/login'/>
                <Route component={Register} path='/cadastro'/>
                <PrivateRoute exact component={Home} path='/'/>
                <PrivateRoute component={Products} path='/produtos'/>
                <PrivateRoute component={Cart} path='/carrinho'/>
                <PrivateRoute component={Finish} path='/fim-da-jornada' isFinish/>
                <PrivateRoute component={Admin} path={paths.Order} isAdmin/>
                <PrivateRoute component={Admin} path={paths.Products} isAdmin/>
                <PrivateRoute component={Admin} path={paths.NewProduct} isAdmin/>
                <PrivateRoute component={Admin} path={paths.EditProduct} isAdmin/>
            </Switch>
        </Router>
    )
}

export default Routes