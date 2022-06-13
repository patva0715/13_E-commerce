import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Link from '../components/Link'
import { useProgressiveImg } from '../hooks/useProgressiveImg'

const LandingPage = () => {
    const [src, { blur }] = useProgressiveImg(`/images/homesplashtiny.jpg`, `/images/homeimage.jpg`);
    return (
        <Container maxWidth='xl' sx={{ minHeight:'100vh',p:'0 !important', display: 'flex', flexWrap: {xs:'wrap',md:'nowrap'} }}>
            <Box sx={{ flex: '1 1 300px',order:{xs:2,md:1}, p: 2, display: 'flex',justifyContent:'center', alignItems:'flex-start', flexDirection: 'column' }}>
                <Typography variant='h1' sx={{whiteSpace:'nowrap'}}>Design Inspires</Typography>
                <Typography variant='body2' sx={{mb:2}}>Buld your dream workspace, so you can get your best work done.</Typography>
                <Button variant='contained' href='products' sx={{ p: 1, fontSize: '1rem' }}>VIEW ALL PRODUCTS</Button>
            </Box>
            <Box sx={{ flex: '1 1 500px',order:{xs:1,md:2}, }}>
                <img className={`image-fit-cover`} src={src} style={{
                    filter: blur ? "blur(5px)" : "none",
                    transition: blur ? "none" : "filter .7s ease-out"
                }} />
            </Box>

        </Container>
    )
}

export default LandingPage
