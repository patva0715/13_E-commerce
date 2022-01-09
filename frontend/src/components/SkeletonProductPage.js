import { Box, Container, Skeleton, Stack } from '@mui/material'
import React from 'react'

const SkeletonProductPage = () => {
    return (
        <>
            <Box sx={{ bgcolor: 'rgba(0,0,0,.028)', width: '100%' }}>
                <Container maxWidth='xl' sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Box sx={{ flex: '4 1 270px', aspectRatio: '16/14', p: 1 }} className='image-holder'>

                    </Box>
                    <Box display='flex' sx={{ flex: '1 3 300px', minHeight: '250px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Skeleton variant="text" height='3rem' width='15rem' />
                        <Skeleton variant="text" height='1rem' width='5rem' />
                        <Skeleton variant="text" height='2rem' width='2rem' />
                        <Skeleton variant="text" height='3rem' width='15rem' />
                    </Box>

                </Container>


            </Box>
            <Container maxWidth='md' sx={{ p: '100px 0' }} >
            <Skeleton variant="text" height='3rem' width='15rem'  sx={{margin:'0 auto'}}  />
                <Skeleton variant="text" height='200px' width='100%' sx={{margin:'0 auto'}}/>
          
            </Container>
        </>
    )
}

export default SkeletonProductPage
