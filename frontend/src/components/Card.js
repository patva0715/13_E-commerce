import { Box, Typography } from '@mui/material'
import React from 'react'
import Link from '../components/Link'
import { useProgressiveImg } from '../hooks/useProgressiveImg'

const Card = ({ product }) => {
    const itemName = product.name.toLowerCase().replace(/ /g, '')
    const path = '/images/products/'
    const [src, { blur }] = useProgressiveImg(`${path}${itemName}/${itemName}tiny.jfif`, `${path}${itemName}/${itemName}.jfif`);

    return (
        <Box key={product._id} sx={{ display: 'block', flex: '1 1 200px', my: 2, mx: 1 }}>
            <Link to={`/products/${product._id}`}>
                <Box sx={{ width: '100%' }} >
                    <Box sx={{ aspectRatio: '16/18', p: 1, bgcolor: 'rgba(0,0,0,.028)' }} className='image-holder'>
                        <img className='image-fit-contain image-blend' src={src} alt='product' style={{
                            filter: blur ? "blur(15px)" : "none",
                            transition: blur ? "none" : "filter 1s ease-out"
                        }} />
                    </Box>
                    <Typography variant='body1' color='grey.500' fontWeight='500'>
                        {product.name}
                    </Typography>
                    <Typography variant='body1' color='grey.500' fontWeight='500'>
                        $ {product.price}
                    </Typography>
                </Box>
            </Link>
        </Box>
    )
}


export default Card
