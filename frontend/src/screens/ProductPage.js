import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Container, Typography,Button } from '@mui/material'
const ProductPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const fetchData = async () => {
        const { data } = await axios.get(`/api/products/${id}`)
        console.log(data)
        setProduct(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            {product &&
                <Box sx={{ bgcolor: 'rgba(0,0,0,.028)', width: '100%' }}>
                    <Container maxWidth='xl' sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Box sx={{ flex: '4 1 270px', aspectRatio: '16/14', p: 1}} className='image-holder'>
                            <img className='image-fit-contain' src={`/images/products/walnutshelf/walnutshelf.png`} alt='product' />
                        </Box>
                        <Box display='flex' sx={{ flex: '1 3 300px', minHeight: '250px', alignItems:'center' }}>
                            <Box display='block' sx={{textAlign:'center',margin:'0 auto'}}>
                                <Typography variant='h2' gutterBottom>{product.name}</Typography>
                                <Typography variant='body2' gutterBottom>{product.colors&&product.colors[0]}</Typography>
                                <Typography variant='body2' gutterBottom>${product.price}</Typography>
                                <Button variant='contained' disableRipple sx={{width:'100%'}}>ADD TO CART</Button>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            }
              <Container maxWidth='md' sx={{textAlign:'center',p:'100px 0'}} >
                    <Typography variant='h2'>{product.subtitle}</Typography>
                    <Typography variant='body2' color='grey.500'>{product.description}</Typography>
                    </Container>
        </div>
    )
}

export default ProductPage
