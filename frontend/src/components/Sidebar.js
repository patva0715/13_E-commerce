import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useProgressiveImg } from '../hooks/useProgressiveImg'
const Sidebar = ({  }) => {
    const cart  = useSelector(state => state.cart)
    const { cartItems } = cart
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }
    let itemsPrice = addDecimals(cart.cartItems.reduce(((total, item) => total + item.price * item.qty), 0))
    let shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 15)
    let taxPrice = addDecimals(Number((.15 * itemsPrice).toFixed(2)))
    let totalPrice = Number(itemsPrice) + Number(shippingPrice) + Number(taxPrice)
    return (
        <Box sx={{ height: '100%', width: '100%', maxWidth: { xs: '100%', md: '400px' }, p: 4, pt:{xs:3,md:'70px'}, borderTop:'2px solid #eee' }}>
            {cartItems.map((product, index) => <CartItem product={product} key={index} />)}
            <Box display='flex' sx={{ py: 1, justifyContent: 'space-between' }}>
                <Typography variant='body1'>Subtotal</Typography>
                <Typography variant='body1' fontWeight='400'>${itemsPrice}</Typography>
            </Box>
            <Box display='flex' sx={{ py: 1, justifyContent: 'space-between' }}>
                <Typography variant='body1'>Shipping</Typography>
                <Typography variant='body1' fontWeight='400'>Calculated at next step</Typography>
            </Box>
            <Box display='flex' sx={{ py: 1, justifyContent: 'space-between' }}>
                <Typography variant='body1'>Taxes (estimated)</Typography>
                <Typography variant='body1' fontWeight='400'>${taxPrice}</Typography>
            </Box>
            <Divider />
            <Box display='flex' sx={{ py: 1, justifyContent: 'space-between', display:'flex',alignItems:'center'}}>
                <Typography variant='body1'>Total</Typography>
                <Typography fontSize='1.4rem' fontWeight='500' sx={{}}><span style={{fontSize:'.7rem',fontWeight:'400',marginRight:'5px'}}>USD</span>${totalPrice}</Typography>
            </Box>
        </Box>
    )
}




const CartItem = ({ product }) => {
    const productName = product.name.toLowerCase().replace(/ /g, '')
    const path = '/images/products/'
    const [src, { blur }] = useProgressiveImg(`${path}${productName}/${productName}tiny.jfif`, `${path}${productName}/${productName}med.jfif`);

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: '1 0 auto', width: '6rem', aspectRatio: '16/20' }}>
                    <img className={`image-fit-contain image-blend ${blur && 'blur'}`} src={src} alt='cart-item' />
                </Box>
                <Box display='flex' sx={{ flex: '1 1 600px', flexDirection: 'column', justifyContent: 'center', ml: 2 }}>
                    <Typography variant='body1' fontWeight='500'>{product.name}</Typography>
                    <Typography>Quantity: {product.qty}</Typography>
                </Box>
                <Box display='flex' sx={{ flex: '0 1 100px', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-end' }}>
                    <Typography fontSize='1rem' fontWeight='400'>${product.price}</Typography>
                </Box>
            </Box>
            <Divider />
        </>
    )
}

export default Sidebar
