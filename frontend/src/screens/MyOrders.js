import { Box, Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Link from '../components/Link'
import { listMyOrders } from '../redux/actions/orderActions'

const MyOrders = () => {
    let navigate=useNavigate()
    const dispatch=useDispatch()

    const {loading,error,user}=useSelector(state=>state.userDetails)
    const {userInfo}=useSelector(state=>state.userLogin)
    const {success}=useSelector(state=>state.userUpdateProfile)
    const {loading:loadingOrders,error:errorOrders,orders}=useSelector(state=>state.orderListMy)

    useEffect(()=>{
        if(!userInfo){
            navigate(`/login`)
        }
        else{
            if(!user||!user.name||success){
                // console.log(user)
                // dispatch(getUserDetails('profile'))
                console.log('DISPATCHING')
                dispatch(listMyOrders())
            }
        }

    },[dispatch,userInfo,user])

    return (
        <Container maxWidth='lg'>
            {orders&&orders.map((order,index)=>(
                // ===============ORDER CONTAINER=================
                <Box key={index}>
                    <Link to={`${order._id}`}>
                    {order._id}
                    {order.totalPrice}
                    {order.isPaid}
                    {order.shippingAddress.address}
                    </Link>
                </Box>
            ))}
        </Container>
    )
}

export default MyOrders
