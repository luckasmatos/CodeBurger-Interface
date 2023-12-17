import React from 'react'

import { UserProvider } from './UserContext'
import { CartProvider } from './CartContext'

function AppProvider({ children }) {

    return (
    <UserProvider>
        <CartProvider>
            {children}
        </CartProvider>
    </UserProvider>
    )
}

export default AppProvider