import React from 'react'
import { PrincipalButton } from './styles'

export function Button({children, ...rest}) {
    return <PrincipalButton {...rest}>{children}</PrincipalButton>
}
