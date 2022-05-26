import { Box } from '@mui/material'
import React, { Children } from 'react'

const FlexBox = ({sx,children}) => {
    return (
        <Box display='flex' sx={{...sx,flexWrap:'wrap'}}>{children}</Box>
    )
}

export default FlexBox