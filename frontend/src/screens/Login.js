import { useNavigate, useSearchParams } from 'react-router-dom'
import { Box, Typography, OutlinedInput, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/userActions'

const Login = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let [searchParams, setSearchParams] = useSearchParams();
    const { userInfo, error: loginError } = useSelector(state => state.userLogin)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = () => {
        setError('')
        if (!email || !password) {
            setError('Enter Password And Username')
            return
        }
        else {
            dispatch(login(email, password))
            if (loginError) {
                setError(loginError)
            }
        }
    }
    const loadDemo = () => {
        setEmail('admin@example.com')
        setPassword('123456')
    }
    useEffect(() => {
        if(userInfo&&searchParams.get('redirect')){
            navigate(-1)
            return
        }
        if (userInfo) {
            navigate('/')
        }
    }, [userInfo])
    useEffect(() => {
        // setError('')
    }, [])
    return (
        <Box display='flex'>
            {/* LOGIN FORM CONTAINER */}
            <Box sx={{ flex: '1 1 400px', display: 'flex', alignItems: 'center', minHeight: '95vh', justifyContent: { xs: 'center', md: 'right' } }}>
                <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column', maxWidth: '500px', px: 2,mr:{xs:0,md:'35px'}, textAlign: 'center' }}>
                    <Typography variant='h3' gutterBottom>LOGIN</Typography>
                    <Typography varaint='body2' gutterBottom color='error'>{error && error}</Typography>
                    {/* EMAIL AND PASSWORD INPUT */}
                    <OutlinedInput placeholder='email' sx={{ mb: 2 }} onChange={(e) => setEmail(e.target.value)} value={email} />
                    <OutlinedInput placeholder='password' type='password' sx={{ mb: 4 }} onChange={(e) => setPassword(e.target.value)} value={password} />
                    {/* END EMAIL AND PASSWORD INPUT */}
                    {/* ACTION GROUP */}
                    <Button variant='contained' onClick={handleLogin} sx={{ mb: 2 }}>LOGIN</Button>
                    <Button variant='text' size='small' onClick={() => navigate('/user/register')}>or Register</Button>
                    <Button variant='text' size='small' onClick={loadDemo}>Load Demo User</Button>
                    {/* END ACTION GROUP */}
                </Box>
            </Box>
            {/* IMAGE CONTAINER */}
            <Box sx={{ flex: '1 1 500px', display: { xs: 'none', md: 'flex' }, aspectRatio: '1/1',maxHeight:'95vh' }}>
                <img className='image-fit-cover' src='/images/homeimage.jpg' />
            </Box>
        </Box>
    )
}

export default Login
