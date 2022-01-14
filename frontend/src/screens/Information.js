import { Box, Breadcrumbs, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Link from '../components/Link'
import Sidebar from '../components/Sidebar'
import { saveShippingAddress } from '../redux/actions/cartActions'
const Information = () => {
    let navigate = useNavigate()
    const { shippingAddress } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState(shippingAddress.firstName||'John')
    const [lastName, setLastName] = useState(shippingAddress.lastName||'Doe')
    const [address, setAddress] = useState(shippingAddress.address||'112233 Foo st')
    const [city, setCity] = useState(shippingAddress.city||'Los Angeles')
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode||'992233')
    const [country, setCountry] = useState(shippingAddress.country||'United States')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        navigate('/checkout/payment')
    }
    const breadcrumbs = [<Link to='/cart' style={{color:'#999'}}>CART</Link>, <Link to='/checkout/information'>INFORMATION</Link>, <Link to='/checkout/information'style={{color:'#999'}}>PAYMENT</Link>,]
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row'},minHeight:'100vh' }}>
            {/* =================================LEFT SIDE - INPUT=============================== */}
            <Box display='flex' sx={{ flex: '1 1 55%', justifyContent: { xs: 'center', md: 'right' } }}>
                <Box display='flex' sx={{ maxWidth: '650px', width: '100%', p: 3, gap: 2, flexWrap: 'wrap',flexDirection:'column' }}>
                    {/* ==============================HEADER=================================== */}
                    <Box display='flex' sx={{flexDirection:'column',alignItems:'center',width:'100%' }}>
                        <Typography variant='h1' fontWeight='600' fontFamily='Nunito' gutterBottom sx={{ width: '100%', textAlign: 'center', pt: 4 }}>GROOVEMADE</Typography>
                        <Breadcrumbs
                            separator={<i className="fas fa-chevron-right" style={{ fontSize: '.8rem' }} />}
                            aria-label="breadcrumb"
                            sx={{ fontSize: ".75rem",mb:2 }}
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Box>
                    {/* ==============================INPUT HEADER============================== */}
                    <Typography variant='body2' color='grey.700' sx={{ width: '100%' }}>Contact Information</Typography>
                    <TextField label='email' fullWidth size='small'></TextField>
                    <Typography variant='body2' color='grey.700'>Shipping Address</Typography>
                    {/* ==============================INPUT FIELDS============================== */}
                    <TextField label='First name' fullWidth size='small' value={firstName} onChange={(e) => setFirstName(e.target.value)}></TextField>
                    <TextField label='Last name' fullWidth size='small' value={lastName} onChange={(e) => setLastName(e.target.value)}></TextField>
                    <TextField label='Address' fullWidth size='small' value={address} onChange={(e) => setAddress(e.target.value)}></TextField>
                    <TextField label='City' fullWidth size='small' value={city} onChange={(e) => setCity(e.target.value)}></TextField>
                    <TextField label='Postal Code' fullWidth size='small' value={postalCode} onChange={(e) => setPostalCode(e.target.value)}></TextField>
                    <TextField label='Country' fullWidth size='small' value={country} onChange={(e) => setCountry(e.target.value)}></TextField>
                    {/* ==============================ACTION GROUP============================== */}
                    <Button variant='contained' size='large' onClick={submitHandler}>Continue to Payment</Button>
                    <Button variant='text' onClick={() => navigate('/cart')}>Back to cart</Button>
                </Box>
            </Box>
            {/* =====================================SIDEBAR====================================== */}
            <Box sx={{ flex: '1 1 45%', bgcolor: '#FAFAFA' }}>
                <Sidebar />
            </Box>
        </Box>
    )
}

export default Information
