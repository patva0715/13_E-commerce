import { Box, Container, Divider, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Link from '../components/Link'
import { getOrderDetails } from '../redux/actions/orderActions'

const OrderPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { order } = useSelector(state => state.orderDetails)
    const [state, setState] = useState({})
    useEffect(() => {
        dispatch(getOrderDetails(id))
    }, [id])
    useEffect(() => {
        if (order) {
            console.log(order)
            window.scrollTo(0,0)
            let { address, city, country, postalCode } = order.shippingAddress
            let { taxPrice, totalPrice, shippingPrice } = order
            setState({ address, city, country, postalCode, taxPrice, totalPrice, shippingPrice })
        }
        return (() => {
            setState({})
        })

    }, [order])
    return (
        <>
            {order &&

                <Container maxWidth='xl' sx={{ display: 'block', minHeight: '100vh', p: 1,mt:3 }}>
                    {/* HEADER */}
                    <Box display='flex' sx={{ width: '100%', px: 2, alignItems: 'flex-end', mb: 2, flexWrap: 'wrap' }}>
                        <Typography variant='h3'>ORDER # <strong>{order._id}</strong></Typography>
                        <Divider orientation='vertical' />
                        <Typography variant='body2' color='success.main' fontWeight='600' sx={{ px: 1 }}>Paid</Typography>
                        <Divider orientation='vertical' />
                        <Typography variant='body2' color='grey.500' sx={{ px: 1 }}>{order.createdAt.slice(0, 10)}</Typography>
                    </Box>
                    <Box display='flex' sx={{ gap: 2, flexWrap: 'wrap' }}>
                        {/* LEFT CONTAINER */}
                        <Paper sx={{ flex: '1 2 500px', border: '1px solid #999', borderRadius: '7px', overflow: 'hidden' }}>
                            {order.orderItems && order.orderItems.map((item, index) => (
                                <Item key={index} item={item} />
                            ))}
                        </Paper>
                        {/* RIGHT CONTAINER */}
                        <Paper sx={{ flex: '0 1 350px', p: 2, border: '1px solid #999', borderRadius: '7px', overflow: 'hidden' }}>
                            <Typography variant='body2'>Shipping Address</Typography>
                            <Typography variant='body1' color='grey.500' sx={{ pl: 1 }}>
                                {state.address}<br />
                                {state.city}<br />
                                {state.country}<br />
                                {state.postalCode}<br />
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant='body2'>Payment Summary</Typography>
                            <Typography variant='body1' color='grey.500' sx={{ display: 'flex', justifyContent: 'space-between', pl: 1 }}>
                                <span>Tax</span>
                                <span>${state.taxPrice}</span>
                            </Typography>
                            <Typography variant='body1' color='grey.500' sx={{ display: 'flex', justifyContent: 'space-between', pl: 1 }}>
                                <span>Shipping</span>
                                <span>${state.shippingPrice}</span>
                            </Typography>
                            <Typography variant='body2' color='grey.700' sx={{ display: 'flex', justifyContent: 'space-between', pl: 1 }}>
                                <strong>Total</strong>
                                <strong>${state.totalPrice}</strong>
                            </Typography>

                        </Paper>
                    </Box>
                </Container>}
        </>
    )
}
const Item = ({ item: product }) => {
    const productName = product.name.toLowerCase().replace(/ /g, '')
    console.log(product)
    return (
        <>
            <Box sx={{ p: 2, display: 'flex' }}>
                <Box sx={{ flex: '0 0 auto', width: '100px', aspectRatio: '16/18', bgcolor: '#FAFAFA',border:'1px solid #ccc', borderRadius: '5px' }}>
                    <Link to={`/products/${product.id}`}>
                        <img className='image-fit-contain image-blend' src={`/images/products/${productName}/${productName}med.jfif`} />
                    </Link>
                </Box>
                <Box display='flex' sx={{ flex: '1 1 600px', flexDirection: 'column', justifyContent: 'center', ml: 2 }}>
                    <Link to={`/products/${product.id}`}>
                        <Typography variant='body2' fontWeight='500' sx={{textDecoration:'underline'}}>{product.name}</Typography>
                    </Link>
                    <Typography variant='body1'>Quantity: {product.qty}</Typography>
                </Box>
                <Box display='flex' sx={{ py: 3,pr:{xs:1,md:'40px'}, flex: '0 1 100px', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-end' }}>
                    <Typography variant='body2' fontWeight='700'>${product.price}</Typography>
                    {/* <Button onClick={() => handleRemove(product.id)} sx={{ fontWeight: '400', textDecoration: 'underline' }}>Remove</Button> */}
                </Box>
            </Box>
        </>
    )
}

export default OrderPage
