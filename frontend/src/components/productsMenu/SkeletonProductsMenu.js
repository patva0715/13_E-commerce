import { Box, Skeleton } from '@mui/material'
import React from 'react'

const ar = Array.from(Array(10).keys())
const SkeletonProductsMenu = () => {
    return (
        <>
            {ar.map(item => (
                <Box key={item} sx={{ display: 'flex', gap: 1, flexDirection: 'column',  maxWidth: { xs: '50%', md: '25%' }, flex: { xs: '1 1 120px', md: '1 1 240px' }, aspectRatio: '16/20', m: 1 }}>
                    <Skeleton variant="rectangular" sx={{ flexGrow: '1' }} />
                    <Skeleton variant="text" width='40%' />
                    <Skeleton variant="text" width='20%' />
                </Box>
            ))}
        </>
    )
}

export default SkeletonProductsMenu
