import { Box, Skeleton } from '@mui/material'
import React from 'react'

const ar = Array.from(Array(10).keys())
const SkeletonProductsMenu = () => {
    return (
        <>
            {ar.map(item => (
                <Box sx={{ display: 'block', flex: '1 1 200px', aspectRatio:'1/1', m:1}}>
                    <Skeleton variant="rectangular" width='100%' height='100%' />
                    <Skeleton variant="text" width='40%' />
                    <Skeleton variant="text" width='20%' />
                </Box>
            ))}
        </>
    )
}

export default SkeletonProductsMenu
