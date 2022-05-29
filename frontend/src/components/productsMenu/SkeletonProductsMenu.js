import { Box, Skeleton } from '@mui/material'
import React from 'react'
import FlexBox from '../utils/FlexBox'

const ar = Array.from(Array(15).keys())
const SkeletonProductsMenu = () => {
    return (
        <FlexBox sx={{ justifyContent: 'left', flex: '100 1 500px', gap: 2 }}>
            {ar.map(item => (
                <Box key={item} sx={{ display: 'flex', gap: 1, flexDirection: 'column', maxWidth: { xs: '50%', md: '25%' }, flex: { xs: '1 1 120px', md: '1 1 230px' }, aspectRatio: '16/20'}}>
                    <Skeleton variant="rectangular" sx={{ flexGrow: '1' }} />
                    <Skeleton variant="text" width='40%' />
                    <Skeleton variant="text" width='20%' />
                </Box>
            ))}
        </FlexBox>
    )
}

export default SkeletonProductsMenu
