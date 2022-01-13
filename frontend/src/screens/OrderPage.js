import { Box, Container, Divider, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrderDetails } from '../redux/actions/orderActions'

const OrderPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { order } = useSelector(state => state.orderDetails)

    useEffect(() => {
        dispatch(getOrderDetails(id))
    }, [id])
    return (
        <>
            {order && <Container maxWidth='xl' sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {/* LEFT CONTAINER */}
                <Box sx={{ flex: '1 2 500px', px: 2 }}>
                    {/* ITEM LIST CONTAINER */}
                    <Paper display='flex' sx={{p:2, flexDirection: 'column', bgcolor: '#FAFAFA' }}>
                        {order.orderItems && order.orderItems.map((item, index) => (
                            <Item key={index} item={item} />
                        ))}
                    </Paper>
                </Box>
                {/* RIGHT CONTAINER */}
                <Box sx={{ flex: '0 1 250px', px: 1 }}>
                    <Paper display='flex' sx={{ flexDirection: 'column', bgcolor: '#FAFAFA' }}>
                       fef
                   
                    </Paper>

                </Box>
            </Container>}
        </>
    )
}
const Item = ({ item: product }) => {
    const productName = product.name.toLowerCase().replace(/ /g, '')

    return (
        <>
            <Box sx={{ display: 'flex',height:'120px' }}>
                <Box sx={{ flex: '1 0 auto', width: '25%', aspectRatio: '16/20' }}>
                    <img className='image-fit-contain image-blend' src={`/images/products/${productName}/${productName}med.jfif`} />
                </Box>
                <Box display='flex' sx={{ flex: '1 1 600px', flexDirection: 'column', justifyContent: 'center', ml: 2 }}>
                    <Typography variant='body2' fontWeight='500'>{product.name}</Typography>
                    <Typography variant='body1'>Quantity: {product.qty}</Typography>
                </Box>
                <Box display='flex' sx={{ py: 3, flex: '0 1 100px', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-end' }}>
                    <Typography variant='body2' fontWeight='700'>${product.price}</Typography>
                    {/* <Button onClick={() => handleRemove(product.id)} sx={{ fontWeight: '400', textDecoration: 'underline' }}>Remove</Button> */}
                </Box>
            </Box>
            <Divider />
        </>
    )
}

export default OrderPage
