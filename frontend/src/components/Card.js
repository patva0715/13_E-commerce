import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Link from '../components/Link'
import { useProgressiveImg } from '../hooks/useProgressiveImg'

const Card = ({ product }) => {
    const itemName = product.name.toLowerCase().replace(/ /g, '')
    const path = '/images/products/'
    const [mousedOver,setMousedOver]=useState(false)
    const [src, { blur }] = useProgressiveImg(`${path}${itemName}/${itemName}tiny.jfif`, `${path}${itemName}/${itemName}med.jfif`);
    // const [src2, { blur2 }] = useProgressiveImg(`${path}${itemName}/${itemName}tiny.jfif`, `${path}${itemName}/${itemName}medsub.jfif`);

    const handleMouseOver = ()=>{
        setMousedOver(true)
    }
    const handleMouseLeave = () =>{
        setMousedOver(false)
    }
    return (
        <Box key={product._id} sx={{ display: 'block', maxWidth: '250px', flex: '1 1 200px', my: 2, mx: 1 }}>
            <Link to={`/products/${product._id}`}>
                <Box sx={{ width: '100%' }} >
                    <Box sx={{ aspectRatio: '16/18', position: 'relative' }} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                        <div className='image-container' style={{
                                opacity:mousedOver?'0':'1'
                        }}>
                            <img className='image-blend image-fit-contain' src={src} alt='product' style={{
                                filter: blur ? "blur(15px)" : "none",
                                transition: blur ? "none" : "filter 1s ease-out",
                            }} />
                        </div>
                        <div className='image-container image-container-front' style={{
                                opacity:mousedOver?'1':'0'
                        }}>
                            <img className='image-blend image-fit-contain card-front-img' src={`${path}${itemName}/${itemName}medsub.jfif`} alt='product' style={{
                                // filter: blur2 ? "blur(15px)" : "none",
                                // transition: blur2 ? "none" : "filter 1s ease-out",
                            }} />
                        </div>

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
