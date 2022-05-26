import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Box } from '@mui/material'
import { listProducts } from '../redux/actions/productActions'
import SkeletonProductsMenu from '../components/productsMenu/SkeletonProductsMenu'
import SearchFilter from '../components/productsMenu/SearchFilter'
import Card from '../components/productsMenu/Card'
import FlexBox from '../components/utils/FlexBox'

const ProductsMenu = () => {
    const dispatch = useDispatch()
    const { products, loading, category } = useSelector(state => state.productList)

    // DISPATCH FETCH PRODUCTS AFTER MENU IS LOADED
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    // DISPATCH FETCH PRODUCTS WHEN CATEGORY OR SORT BY CHANGES
    useEffect(() => {
        if (category) dispatch(listProducts(category))
    }, [category])

    return (
        <Container maxWidth='xl' sx={{ display: 'flex', pt: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box sx={{ flex: '0 1 auto', minWidth: '245px', px: 1, mb: 2, mr: { xs: 0, md: 3 } }}>
                <SearchFilter />
            </Box>
            <FlexBox sx={{ justifyContent: 'left', flex: '1 4 500px',gap:2 }}>
                {loading ?
                    <SkeletonProductsMenu />
                    :
                    <>
                        {products && products.map((product) => <Card product={product} key={product._id} />)}
                    </>
                }
            </FlexBox>
        </Container>
    )
}

export default ProductsMenu
