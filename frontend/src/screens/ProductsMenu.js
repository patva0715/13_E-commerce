import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import Card from '../components/Card'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../redux/actions/productActions'
import SkeletonProductsMenu from '../components/SkeletonProductsMenu'

const ProductsMenu = () => {
    const dispatch = useDispatch()
    const { products, loading } = useSelector(state => state.productList)

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <Container maxWidth='xl' sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {loading ? <SkeletonProductsMenu /> :
                <>
                    {products.map((product) => {
                        return (
                            <Card product={product} key={product._id} />
                        )
                    })}
                </>
            }
        </Container>
    )
}

export default ProductsMenu
