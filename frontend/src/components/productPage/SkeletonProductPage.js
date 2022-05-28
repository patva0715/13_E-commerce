import { Box, Container, Skeleton, Stack } from '@mui/material'
import React from 'react'
import FlexBox from '../utils/FlexBox'

const SkeletonProductPage = () => {
    return (
        <>
            <Box sx={{ bgcolor: 'rgba(0,0,0,.028)', width: '100%' }}>
                <Container maxWidth='xl' sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Box sx={{ flex: '5 1 500px', aspectRatio: '16/12' }} className='image-holder'>
                    </Box>
                    <FlexBox column sx={{ flex: '1 3 100px', p: 4 }}>
                        <Skeleton variant="text" height='3.2rem' width='11rem' />
                        <Skeleton variant="text" height='1rem' width='7rem' />
                        <Skeleton variant="text" height='2rem' width='5rem' />
                        <Skeleton variant="text" height='3.3rem' width='10rem' />
                    </FlexBox>
                </Container>
            </Box>

            <Container maxWidth='md' sx={{ p: '100px 0' }} >
                <Skeleton variant="text" height='3rem' width='15rem' sx={{ margin: '0 auto' }} />
                <Skeleton variant="text" height='200px' width='100%' sx={{ margin: '0 auto' }} />
            </Container>
        </>
    )
}

export default SkeletonProductPage
