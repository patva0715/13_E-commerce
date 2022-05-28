import { Box } from '@mui/material'
import React, { Children } from 'react'

const FlexBox = ({sx, children,column}) => {
    let defaultProperties={
        flexDirection:column?'column':'row',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap'
    }
    return (
        <Box display='flex' sx={{...defaultProperties,...sx}}>{children}</Box>
    )
}

export default FlexBox