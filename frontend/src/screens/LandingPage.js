import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Link from '../components/Link'
const LandingPage = () => {
    return (
        <Box display='flex' sx={{ width:'100%',height:'100vh',alignItems:'center'}}>

        <Box display='block' sx={{width:'100vw',height:'100vh', overflow:'hidden', position:'absolute', zIndex:'-1'}}>
            <img className='landing-page-image' src='/images/homeSplash.jpg'/>
        </Box>
        <Box sx={{margin:'0 auto',maxWidth:'300px'}}>
            <Link to='products'>
            <Button variant='contained' sx={{bgcolor:'black', color:'white',p:2,fontSize:'1.5rem'}}>VIEW ALL PRODUCTS</Button>
            </Link>
        </Box>

            </Box>

    )
}

export default LandingPage
