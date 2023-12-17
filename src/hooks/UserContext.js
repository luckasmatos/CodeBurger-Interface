import React, { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [ userData, setUserData ] = useState({})

    async function putUserData(userInfo) {
        setUserData(userInfo)

        localStorage.setItem('codeburger:userData', JSON.stringify(userInfo))
    }

    async function logout() {
        localStorage.removeItem('codeburger:userData')
    }

    useEffect(() => {

        async function loadUserData() {
            const clientInfo = localStorage.getItem('codeburger:userData')

            if(clientInfo) {
                setUserData(JSON.parse(clientInfo))
            }
        }

        loadUserData()
    }, [])

    return (
        <UserContext.Provider value={{putUserData, userData, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if(!context) {
        throw new Error('useUser must be used with UserContext')
    }

    return context
}