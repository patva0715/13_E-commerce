import { Box, Typography, Container, Button, Divider } from '@mui/material'
import React from 'react'
import Link from '../components/Link'

const CartPopup = () => {
    const mock = ['DESK', 'TABLE']
    return (
        <Box sx={{ p: 2, backgroundColor: '#f8f8f8', margin: '0 auto' }}>
            <Typography variant='h3'>In Your Cart</Typography>
            <Divider />
            {mock.map((item) => (
                <>
                    <Box>
                        <Typography>{item}</Typography>
                    </Box>
                    <Divider />
                </>
            ))}
            <Typography variant='h6'>Subtotal</Typography>
            <Divider />
            <Link to="/cart">
            <Button fullWidth variant='contained'>GO TO CART</Button>
            </Link>
        </Box>
    )
}

export default CartPopup
