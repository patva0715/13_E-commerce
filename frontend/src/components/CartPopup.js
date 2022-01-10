import { Box, Typography, Button, Divider } from '@mui/material'
import React from 'react'
import Link from '../components/Link'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/actions/cartActions'
import { useProgressiveImg } from '../hooks/useProgressiveImg'

const CartPopup = ({ handleClose }) => {
    const { cartItems } = useSelector(state => state.cart)

    return (
        <Box onClick={(e) => e.stopPropagation()} sx={{ p: 2, width: '100%', maxWidth: '500px', backgroundColor: '#f8f8f8', margin: '0 auto' }}>
            <Box display='flex' sx={{ justifyContent: 'space-between' }}>
                <Typography variant='h2' gutterBottom>In Your Cart</Typography>
                <i onClick={handleClose}  className="fas fa-times"></i>
            </Box>
            <Divider />
            {cartItems.map((product, index) => <CartItem product={product} key={index}/>)}
            <Box display='flex' sx={{ justifyContent: 'space-between' }}>
                <Typography variant='h6'>Subtotal</Typography>
                <Typography variant='h6'>${cartItems.reduce((total, item) => { return (item.price * item.qty + total) }, 0)}</Typography>
            </Box>
            <Divider />
            <Link to="/cart">
                <Button fullWidth variant='contained'>GO TO CART</Button>
            </Link>
        </Box>
    )
}
const CartItem = ({product}) =>{
    const dispatch = useDispatch()
    const productName = product.name.toLowerCase().replace(/ /g, '')
    const path = '/images/products/'
    const [src, { blur }] = useProgressiveImg(`${path}${productName}/${productName}tiny.jfif`, `${path}${productName}/${productName}med.jfif`);
    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    }
    return (
        <>
            <Box  sx={{ display: 'flex' }}>
                <Box sx={{ flex: '1 0 auto', width: '6rem', aspectRatio: '16/20' }}>
                    <img className={`image-fit-contain image-blend ${blur&&'blur'}`} src={src} alt='cart-item' />
                </Box>
                <Box display='flex' sx={{ flex: '1 1 600px', flexDirection: 'column', justifyContent: 'center', ml: 2 }}>
                    <Typography variant='body1' fontWeight='500'>{product.name}</Typography>
                    <Typography>Quantity: {product.qty}</Typography>
                </Box>
                <Box display='flex' sx={{ flex: '0 1 100px', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-end' }}>
                    <Typography fontSize='1rem' fontWeight='700'>${product.price}</Typography>
                    <Button onClick={() => handleRemove(product.id)} sx={{ fontWeight: '400', textDecoration: 'underline' }}>Remove</Button>
                </Box>
            </Box>
            <Divider />
        </>
    )
}

export default CartPopup
