import { Container, Typography, Box } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
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
            {products.map((product) => {
                return (
                    <Card product={product}/>
                // <Box key={product._id} sx={{ display: 'block', flex: '1 1 200px', my:2 ,mx:1 }}>
                //     <Link to={`/products/${product._id}`}>
                //         <Box sx={{width:'100%'}} >
                //             <Box sx={{aspectRatio:'16/18',p:1,bgcolor:'rgba(0,0,0,.028)'}} className='image-holder'>
                //                 <img className='image-fit-contain image-blend' src={`/images/products/${itemName}/${itemName}.jfif`} alt='product'/>
                //             </Box>
                //             <Typography variant='body1' color='grey.500' fontWeight='500'>
                //                 {product.name}
                //             </Typography>
                //             <Typography variant='body1' color='grey.500' fontWeight='500'>
                //                 $ {product.price}
                //             </Typography>
                //         </Box>
                //     </Link>
                // </Box>
            )})}
        </Container>
    )
}

export default ProductsMenu
