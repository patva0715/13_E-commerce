import { Box, Container, Skeleton, Stack } from '@mui/material'
import React from 'react'
import FlexBox from '../utils/FlexBox'

const SkeletonProductPage = () => {
    return (
        <>
            <Box sx={{ bgcolor: 'rgba(0,0,0,.028)', width: '100%' }}>
                <Container sx={theme => ({ display: 'flex', alignItems: 'center', flexWrap: 'wrap', maxWidth: theme.breakpoints.values.lg })}>
                    <Box sx={{ flex: '4 1 270px', aspectRatio: '16/14', p: 1 }} className='image-holder'>

                    </Box>
                    <FlexBox column sx={{ flex: '1 3 300px' }}>
                        <Skeleton variant="text" height='3rem' width='15rem' />
                        <Skeleton variant="text" height='1rem' width='7rem' />
                        <Skeleton variant="text" height='2rem' width='5rem' />
                        <Skeleton variant="text" height='3rem' width='15rem' />
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
