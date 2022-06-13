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
        dispatch(listProducts(category))
    }, [dispatch, category])

    return (
        <Container maxWidth='xl' sx={{ display: 'flex', pt: 3, flexWrap:'wrap',minHeight:'90vh'}}>
            <Box sx={{ flex: '1 1 250px',  px: 2, mb: 2}}>
                <SearchFilter />
            </Box>
            {loading ?
                <SkeletonProductsMenu />
                :
                <FlexBox sx={{ justifyContent: 'left',alignItems:'flex-start', flex: '100 1 500px', gap: 2 }}>
                    {products && products.map((product) => <Card product={product} key={product._id} />)}
                </FlexBox>
            }
        </Container>
    )
}

export default ProductsMenu
