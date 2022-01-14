import { Box, Breadcrumbs, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Link from '../components/Link'
import Sidebar from '../components/Sidebar'
// import { savePaymentMethod } from '../redux/actions/cartActions'
import { createOrder } from '../redux/actions/orderActions'
import { CART_RESET } from '../redux/constants/cartConstants'
import { ORDER_CREATE_RESET } from '../redux/constants/orderConstants'

// PAY AND PLACE ORDER HERE | ALSO MANAGE PAYMENT
const Payment = () => {
    let navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    if (!shippingAddress) {
        navigate('/checkout/shipping')
    }
    const [paymentMethod, setPaymentMethod] = useState('PayPal')



    //
    const dispatch = useDispatch()
    const orderCreate = useSelector(state => state.orderCreate)
    const { order, success, error } = orderCreate

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }
    cart.itemsPrice = addDecimals(cart.cartItems.reduce(((total, item) => total + item.price * item.qty), 0))
    cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 15)
    cart.taxPrice = addDecimals(Number((.15 * cart.itemsPrice).toFixed(2)))
    cart.totalPrice = Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)
    cart.paymentMethod = paymentMethod

    const placeOrderHandler = () => {
        dispatch(
            createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice,
            })
        )
    }
    useEffect(() => {
        if (success) {
            navigate(`/order/${order._id}`)
            dispatch({ type: ORDER_CREATE_RESET })
            dispatch({ type: CART_RESET })
            // eslint-disable-next-line
        }
    }, [success])
    const breadcrumbs = [<Link to='/cart'style={{color:'#999'}}>CART</Link>, <Link to='/checkout/information'style={{color:'#999'}}>INFORMATION</Link>, <Link to='/checkout/payment'>PAYMENT</Link>,]

    return (
        <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', md: 'noWrap' }, minHeight: '100vh' }}>
            <Box display='flex' sx={{ flex: '1 1 55%', justifyContent: { xs: 'center', md: 'right' } }}>
                <Box display='flex' sx={{ maxWidth: '650px', width: '100%', p: 3, gap: 2, flexWrap: 'wrap', flexDirection: 'column' }}>
                    {/* ==============================HEADER=================================== */}
                    <Box display='flex' sx={{ flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                        <Typography variant='h1' fontWeight='600' fontFamily='Nunito' gutterBottom sx={{ width: '100%', textAlign: 'center', pt: 4 }}>GROOVEMADE</Typography>
                        <Breadcrumbs
                            separator={<i className="fas fa-chevron-right" style={{ fontSize: '.8rem' }} />}
                            aria-label="breadcrumb"
                            sx={{ fontSize: ".75rem", mb: 2 }}
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Box>
                    <Button variant='contained' onClick={placeOrderHandler}>PLACE ORDER USING DEMO CARD</Button>
                </Box>

            </Box>

            <Box sx={{ flex: '1 1 45%', bgcolor: '#FAFAFA' }}>
                <Sidebar />
            </Box>
        </Box>
    )
}

export default Payment
