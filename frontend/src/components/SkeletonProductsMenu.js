import { Box, Skeleton } from '@mui/material'
import React from 'react'

const ar = Array.from(Array(10).keys())
const SkeletonProductsMenu = () => {
    return (
        <>
            {ar.map(item => (
                <Box key={item} sx={{ display: 'flex',gap:1, flexDirection:'column', flex: '1 1 200px', aspectRatio:'16/18', m:2}}>
                    <Skeleton variant="rectangular" sx={{flexGrow:'1'}} />
                    <Skeleton variant="text" width='40%' />
                    <Skeleton variant="text" width='20%' />
                </Box>
            ))}
        </>
    )
}

export default SkeletonProductsMenu
