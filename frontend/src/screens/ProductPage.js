import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Container, Typography, Button, Backdrop } from '@mui/material'
import CartPopup from '../components/CartPopup'
import { useProgressiveImg } from '../hooks/useProgressiveImg'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetail, resetProductDetail } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'
import SkeletonProductPage from '../components/SkeletonProductPage'

const ProductPage = () => {
    const dispatch = useDispatch()
    const { product,loading } = useSelector(state => state.productDetails)
    const { id } = useParams()
    const [open, setOpen] = useState(false)
    const path = '/images/products/'
    const [itemName, setItemName] = useState(product.name ? product.name.toLowerCase().replace(/ /g, '') : '')
    const [src, { blur }] = useProgressiveImg(`${path}${itemName}/${itemName}tiny.jfif`, `${path}${itemName}/${itemName}.jfif`);

    const handleAddToCart = () => {
        setOpen(true)
        dispatch(addToCart(product._id, 1))
    }
    const handleClose = () => {
        setOpen(false)
    }
    useEffect(() => {
        if(id!==undefined&&id)dispatch(getProductDetail(id))
        
    }, [id])
    useEffect(() => {
        if (product.name) setItemName(product.name.toLowerCase().replace(/ /g, ''))
    }, [product])
    useEffect(() => {
        window.scrollTo(0, 0);
        return (() => {
            console.log('reset')
            dispatch(resetProductDetail())
        })
    }, [])
    return (
        <>
            {loading?<SkeletonProductPage/>:
            product&&
                <>
                    <Box sx={{ bgcolor: 'rgba(0,0,0,.028)', width: '100%' }}>
                        <Container maxWidth='xl' sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Box sx={{ flex: '4 1 270px', aspectRatio: '16/14', p: 1 }} className='image-holder'>
                                {itemName && <img className='image-fit-contain image-blend' src={src} alt='product' style={{
                                    filter: blur ? "blur(5px)" : "none",
                                    transition: blur ? "none" : "filter .7s ease-out"
                                }} />}
                            </Box>
                            <Box display='flex' sx={{ flex: '1 3 300px', minHeight: '250px', alignItems: 'center' }}>
                                <Box display='block' sx={{ textAlign: 'center', margin: '0 auto' }}>
                                    <Typography variant='h2' gutterBottom>{product.name}</Typography>
                                    <Typography variant='body2' gutterBottom>{product.colors && product.colors[0]}</Typography>
                                    <Typography variant='body2' gutterBottom>${product.price}</Typography>
                                    <Button variant='contained' disableRipple sx={{ width: '100%' }} onClick={handleAddToCart}>ADD TO CART</Button>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                    <Container maxWidth='md' sx={{ textAlign: 'center', p: '100px 10px' }} >
                        <Typography variant='h2' gutterBottom>{product.subtitle}</Typography>
                        <Typography variant='body2' color='grey.500'>{product.description}</Typography>
                    </Container>
                </>
            }
            <Backdrop
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CartPopup handleClose={handleClose} />
            </Backdrop>
        </>
    )
}

export default ProductPage
