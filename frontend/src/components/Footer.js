import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box component='footer' sx={{ px: 1, py:5, lineHeight: '20px', bgcolor: 'primary.main', color: '#ddd' }}>
            <Container maxWidth='xl' >
                <Box display='flex' sx={{flexWrap:'wrap'}}>
                    <Stack sx={{flex:'0 1 300px',  alignItems: 'flex-start', gap:1 }}>
                        <Button variant='text' size='large' sx={{ color: 'inherit',py:0, fontSize:'1.5rem',textTransform:'none' }}>Shop</Button>
                        <Button variant='text' size='large' sx={{ color: 'inherit',py:0, fontSize:'1.5rem',textTransform:'none' }}>About</Button>
                        <Button variant='text' size='large' sx={{ color: 'inherit',py:0, fontSize:'1.5rem',textTransform:'none' }}>Journal</Button>
                        <Button variant='text' size='large' sx={{ color: 'inherit',py:0, fontSize:'1.5rem',textTransform:'none' }}>Support</Button>
                    </Stack>
                    <Box sx={{flex:'0 1 200px'}}>
                        <Typography variant='h6' fontSize='1.5rem'>Newsletter Signup</Typography>
                        <Typography variant='body1'>SIgn up to our Newsletter to hear about new product releases, learn about our design process and everything else going on behind the scenes at Grovemade.</Typography>
                    </Box>
                </Box>
                <Box>
                    <Stack direction='row' ></Stack>
                    <Button variant='text' sx={{color:'white'}}>IG</Button>
                    <Button variant='text' sx={{color:'white'}}>FB</Button>
                </Box>

            </Container>
            {/* Built by Patrick Valera.<br />
                MongoDB hackathon - E-commerce submission. <br />
                UI design inspired by <a href='https://grovemade.com/'>Grovemade's</a> official site.<br />
                All data and image rights belong to Grovemade.<br /> */}
        </Box>
    )
}

export default Footer
