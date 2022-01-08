import { Container, Typography, Box } from '@mui/material'
import Link from '../components/Link'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const ProductsMenu = () => {
    const [products, setProducts] = useState([])
    const fetchData = async () => {
        const { data } = await axios.get('/api/products')
        setProducts(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <Container maxWidth='xl' sx={{ display: 'flex', flexWrap: 'wrap',justifyContent:'space-around' }}>
            {products.map((product) => (
                <Box key={product._id} sx={{ display: 'block', flex: '1 1 200px', my:2 ,mx:1 }}>
                    <Link to={`/products/${product._id}`}>
                        <Box sx={{width:'100%'}} >
                            <Box sx={{aspectRatio:'16/18',p:1,bgcolor:'rgba(0,0,0,.028)'}} className='image-holder'>
                                <img className='image-fit-contain' src={`/images/products/walnutshelf/walnutshelf.png`} alt='product'/>
                            </Box>
                            <Typography variant='body2'>
                                {product.name}
                            </Typography>
                            <Typography variant='body2'>
                                {product.price}
                            </Typography>
                        </Box>
                    </Link>
                </Box>
            ))}
        </Container>
    )
}

export default ProductsMenu
