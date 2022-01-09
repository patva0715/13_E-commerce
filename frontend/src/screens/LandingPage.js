import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Link from '../components/Link'
import { useProgressiveImg } from '../hooks/useProgressiveImg'

const LandingPage = () => {
    const [src, { blur }] = useProgressiveImg(`/images/homesplashtiny.jpg`, `/images/homeimage.jpg`);
    return (
        <Box display='flex' sx={{ width: '100%', height: '100vh', alignItems: 'center' }}>
            <Box display='block' sx={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'absolute', zIndex: '-1' }}>
                <img className={`image-fit-cover`} src={src} style={{
                    filter: blur ? "blur(5px)" : "none",
                    transition: blur ? "none" : "filter .7s ease-out"
                }} />
            </Box>
            <Box sx={{ margin: '0 auto', maxWidth: '300px' }}>
                <Link to='products'>
                    <Button variant='contained' sx={{ bgcolor: 'black', color: 'white', p: 2, fontSize: '1.5rem' }}>VIEW ALL PRODUCTS</Button>
                </Link>
            </Box>
        </Box>
    )
}

export default LandingPage
