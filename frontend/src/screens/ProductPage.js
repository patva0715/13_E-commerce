import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Container, Typography, Button } from '@mui/material'
import CartPopup from '../components/productPage/CartPopup'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetail, resetProductDetail } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'
import SkeletonProductPage from '../components/productPage/SkeletonProductPage'
import FlexBox from '../components/utils/FlexBox'
import Carousel from '../components/productPage/Carousel'

const ProductPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { product, loading } = useSelector(state => state.productDetails)
    const [open, setOpen] = useState(false)

    const handleAddToCart = () => {
        dispatch(addToCart(product._id, 1))
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        if (id !== undefined && id) {
            dispatch(getProductDetail(id))
        }
        window.scrollTo(0, 0);
        return (() => {
            dispatch(resetProductDetail())
        })
    }, [id])

    return (
        <>
            {loading && product ?
                <SkeletonProductPage /> :
                <>
                    {/* PRODUCT GALLERY AND INFO ============================ */}
                    <Box sx={{ bgcolor: 'rgba(0,0,0,.028)' }}>
                        <Container maxWidth='xl' sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap',px:{xs:1,sm:2,md:'50px'} }}>
                            {/* PRODUCT CAROUSEL ============================ */}
                            <Box sx={{ flex: '2 1 500px' }}>
                                <Carousel images={product.imgSrc} />
                            </Box>
                            {/* PRODUCT NAME/COLOR/PRICE/BUY ================= */}
                            <FlexBox column sx={{ flex: '1 3 400px',p:4}}>
                                <Typography variant='h2' sx={{whiteSpace:'nowrap'}} >{product.name}</Typography>
                                <Typography variant='body2'>{product.colors && product.colors[0]}</Typography>
                                <Typography variant='body2'>${product.price}</Typography>
                                <Button variant='contained' onClick={handleAddToCart}>ADD TO CART</Button>
                            </FlexBox>
                        </Container>
                    </Box>

                    {/* PRODUCT DESCRIPTION ================================== */}
                    <Container maxWidth='md' sx={{ textAlign: 'center', py: '50px' }} >
                        <Typography variant='h2' >{product.subtitle}</Typography>
                        <Typography variant='body2' color='grey.500'>{product.description}</Typography>
                    </Container>
                </>
            }

            {open && <CartPopup open={open} handleClose={handleClose} />}
        </>
    )
}

export default ProductPage
