import { Box, Typography, Button, Container, Divider } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/actions/cartActions'
import {useNavigate} from 'react-router-dom'
const Cart = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)
    const { userInfo } = useSelector(state => state.userLogin)
    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    }
    const handleCheckout = () =>{
        if(!userInfo)navigate('/user/login?redirect=/checkout')
        else navigate('/checkout/information')
    }
    return (
        <Container maxWidth='md'>
            <Box display='flex' sx={{ mt: 4, flexDirection: 'column' }}>
                {!cartItems.length ?
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant='h1' gutterBottom sx={{ alignSelf: 'center' }}>Your Cart is Empty</Typography>
                        <Button variant='contained' sx={{ py: 1, mb: 4, fontSize: { xs: '.7rem', md: '1.1rem' } }} onClick={()=>navigate('/products')}>BACK TO SHOP</Button>
                    </Box> :
                    <>
                        <Typography variant='h1' gutterBottom sx={{ alignSelf: 'center' }}>My Cart</Typography>
                        <Button variant='contained' sx={{ py: 1, mb: 4, fontSize: { xs: '.7rem', md: '1.1rem' } }} onClick={handleCheckout}>CONTINUE TO CHECKOUT</Button>
                    </>
                }
                {cartItems.map((product, index) => {
                    const productName = product.name.toLowerCase().replace(/ /g, '')
                    return (
                        <>
                            <Box key={index} sx={{ display: 'flex' }}>
                                <Box sx={{ flex: '1 0 auto', width: '25%', aspectRatio: '16/20' }}>
                                    <img className='image-fit-contain image-blend' src={`/images/products/${productName}/${productName}med.jfif`} />
                                </Box>
                                <Box display='flex' sx={{ flex: '1 1 600px', flexDirection: 'column', justifyContent: 'center', ml: 2 }}>
                                    <Typography variant='body2' fontWeight='500'>{product.name}</Typography>
                                    <Typography variant='body1'>Quantity: {product.qty}</Typography>
                                </Box>
                                <Box display='flex' sx={{ py: 3, flex: '0 1 100px', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-end' }}>
                                    <Typography variant='body2' fontWeight='700'>${product.price}</Typography>
                                    <Button onClick={() => handleRemove(product.id)} sx={{ fontWeight: '400', textDecoration: 'underline' }}>Remove</Button>
                                </Box>
                            </Box>
                            <Divider />
                        </>)
                })}
            </Box>
        </Container>
    )
}

export default Cart
