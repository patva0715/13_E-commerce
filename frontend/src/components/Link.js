import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
const Link = ({to,children,style}) => {
    return (
        <RouterLink to={to} disabled style={style} className='link-generic'>
            {children}
        </RouterLink>
    )
}

export default Link
