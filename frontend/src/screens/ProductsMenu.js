import { Container, Box } from '@mui/material'
import React, { useEffect } from 'react'
import Card from '../components/Card'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../redux/actions/productActions'
import SkeletonProductsMenu from '../components/SkeletonProductsMenu'
import SearchFilter from '../components/SearchFilter'

const ProductsMenu = () => {
    const dispatch = useDispatch()
    const { products, loading, category} = useSelector(state => state.productList)

    // DISPATCH FETCH PRODUCTS WHEN CATEGORY OR SORT BY CHANGES
    useEffect(() => {
        // console.log('IN UE OF PRODUCTS MENU')
        // console.log(category,sortBy)
        dispatch(listProducts())
    }, [dispatch])
    useEffect(()=>{
        if(category)dispatch(listProducts(category))
    },[category])
    return (
        <Container maxWidth='xl' sx={{ display: 'flex', pt:3,flexDirection:{xs:'column',md:'row',minHeight:'90vh'}  }}>
            <Box sx={{flex:'0 1 auto',minWidth:'245px',px:1, mb:2, mr:{xs:0,md:3}}}>
                <SearchFilter/>
            </Box>
            <Box display='flex' sx={{justifyContent:'left', flexWrap:'wrap',flex:'1 4 500px'}}>
            {loading ? <SkeletonProductsMenu /> :
                <>
                    {products&&products.map((product) => {
                        return (
                            <Card product={product} key={product._id} />
                        )
                    })}
                </>
            }
            </Box>
        </Container>
    )
}

export default ProductsMenu
