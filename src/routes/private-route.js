import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Header } from '../components/header'
import { Finish } from '../pages'

function PrivateRoute({component, isAdmin, isFinish, ...rest}) {
    const user = localStorage.getItem('codeburger:userData')

    if(!user) {
        return <Redirect to='/login' />
    }

    if(isAdmin && !JSON.parse(user).admin) {
        return <Redirect to='/' />
    }

    return (
        <>
            {!isAdmin && !isFinish ? <Header /> : null}
            <Route component={component}/>
        </>
    ) 
}

export default PrivateRoute

