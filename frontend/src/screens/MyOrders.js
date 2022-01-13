import { Box, Button, Container, Divider, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Link from '../components/Link'
import { listMyOrders } from '../redux/actions/orderActions'

const MyOrders = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const { loading, error, user } = useSelector(state => state.userDetails)
    const { userInfo } = useSelector(state => state.userLogin)
    const { success } = useSelector(state => state.userUpdateProfile)
    const { loading: loadingOrders, error: errorOrders, orders } = useSelector(state => state.orderListMy)

    useEffect(() => {
        if (!userInfo) {
            navigate(`/login`)
        }
        else {
            if (!user || !user.name || success) {
                // console.log(user)
                // dispatch(getUserDetails('profile'))
                console.log('DISPATCHING')
                dispatch(listMyOrders())
                console.log(orders)
            }
        }

    }, [dispatch, userInfo, user])

    return (
        // =================ORDERS CONTAINER==========================
        <Container maxWidth='lg' sx={{p:{xs:'10px',md:2}}}>
            {orders && orders.map((order, index) => (
                // ===============ORDER CONTAINER=================
                <Paper key={index} elevation={0} sx={{ mb: 3, border:'1px solid #999', borderRadius:'8px', overflow:'hidden' }}>
                    {/* =======HEADER========== */}
                    <Box display='flex' sx={{ bgcolor: '#f3f3f3', p:{xs:'10px',md:2}, gap: 2, width: '100%'}}>
                        <Box sx={{fontSize:{xs:'.4rem',md:'.8rem'}}}>
                            <Typography sx={{whiteSpace:'noWrap'}}>ORDER PLACED</Typography>
                            <Typography >{order.createdAt.slice(0, 10)}</Typography>
                        </Box>
                        <Box>
                            <Typography >TOTAL</Typography>
                            <Typography >${order.totalPrice}</Typography>
                        </Box>
                        <Box>
                            <Typography >SHIP TO</Typography>
                            <Typography sx={{width:'100px',textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap'}}>{order.shippingAddress.firstName || order.shippingAddress.address}</Typography>
                        </Box>
                        <Box sx={{ flexGrow: '1', textAlign: 'right', display:{xs:'none',md:'block'} }}>
                            <Typography >ORDER # {order._id}</Typography>
                        </Box>
                    </Box>
                    {/* ORDER ITEMS AND ACTIONS CONTAINER */}
                    <Box display='flex' sx={{flexWrap:'wrap', p:{xs:'10px',md:2}}}>
                        {/* =========ORDER ITEMS============= */}
                        <Box sx={{flexGrow:'1'}}>
                            {order.orderItems && order.orderItems.slice(0, 2).map((product, index) => {
                                const productName = product.name.toLowerCase().replace(/ /g, '')
                                return (
                                    <>
                                        <Box key={index} sx={{ display: 'flex' }}>
                                            <Box sx={{ flex: '0 0  80px', aspectRatio: '16/16' }}>
                                                <img className='image-fit-contain' src={`/images/products/${productName}/${productName}med.jfif`} />
                                            </Box>
                                            <Box display='flex' sx={{ flex: '1 1 600px', flexDirection: 'column', justifyContent: 'center', ml: 2 }}>
                                                <Typography variant='body2' fontWeight='500'>{product.name}</Typography>
                                            </Box>
                                        </Box>
                                    </>)
                            })}
                            {order.orderItems.length>2&&<Typography variant='body1' sx={{textAlign:'center',mb:1}}>+{order.orderItems.length-2} Items</Typography>}
                        </Box>
                        <Box sx={{width:'100%'}}>
                            <Link to={`${order._id}`}>
                                <Button variant='contained' fullWidth>VIEW ORDER</Button>
                            </Link>
                        </Box>
                    </Box>
                </Paper>
            ))}
        </Container>
    )
}

export default MyOrders
