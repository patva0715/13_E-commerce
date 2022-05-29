import React, { useState } from 'react'
import { Box, Button, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import HeaderSearch from './HeaderSearch'
import HeaderAvatar from './HeaderAvatar'
import HeaderLogo from './HeaderLogo'

const Header = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = (e) => {
        setOpen(true)
    }
    return (
        <Box component='header' sx={{ borderBottom: '2px solid #eee' }}>

            {/* HEADER FOR DESKTOP =============================================*/}
            <Container maxWidth='xl' sx={{ p: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                {/* LEFT PART OF HEADER======================================= */}
                <Box sx={{ display: 'flex', flex:'1 1 50%', alignItems: 'center'}}>
                    <Button variant='text' size='large' sx={{ color: 'black'}} onClick={() => navigate('/products')}>CATALOG</Button>
                    <input className='search-input' placeholder='search' onClick={handleOpen} ></input>
                </Box>
                {/* LOGO PART OF HEADER======================================= */}
                <HeaderLogo />
                {/* RIGHT PART OF HEADER====================================== */}
                <Box sx={{ display: 'flex', flex:'1 1 50%', justifyContent: 'right', alignItems: 'center' }}>
                    <HeaderAvatar />
                    <Button variant='text' size='large' sx={{ color: 'black'}} onClick={() => navigate('/cart')}>CART</Button>
                </Box>
            </Container>

            {/* HEADER FOR MOBILE DEVICE =======================================*/}
            <Container maxWidth='xl' sx={{ p: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                {/* LEFT PART OF HEADER======================================= */}
                <Box sx={{ display: 'flex', flex:'1 1 50%', alignItems: 'center' }}>
                    <i className="fas fa-th" onClick={() => navigate('/products')}></i>
                    <i className="fas fa-search" onClick={handleOpen}></i>
                </Box>
                {/* LOGO PART OF HEADER======================================= */}
                <HeaderLogo />
                {/* RIGHT PART OF HEADER=================================== */}
                <Box sx={{ display: 'flex', flex:'1 1 50%', flexDirection: 'column', alignItems: 'flex-end', }}>
                    <Box display='flex' sx={{alignItems:'center'}}>
                        <HeaderAvatar />
                        <i className="fas fa-shopping-cart" onClick={() => navigate('/cart')}></i>
                    </Box>
                </Box>
            </Container>

            {/* SEARCH POPUP ===================================================*/}
            <HeaderSearch open={open} handleClose={handleClose} />

        </Box>
    )
}

export default Header
