import { useNavigate, } from 'react-router-dom'
import { Box, Button,Container, Typography, OutlinedInput } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/actions/userActions'


const Register = () => {
    let navigate=useNavigate()
    // const { userInfo,error:loginError } = useSelector(state => state.userLogin)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error,setError]=useState('')
    const {error:registerError,loading}=useSelector(state=>state.userRegister)
    const {userInfo}=useSelector(state=>state.userLogin)
    const dispatch=useDispatch()

    const handleRegister = () => {
        setError('')
        if(confirmPassword===password&&email)
        dispatch(register(email, password))
        else{
            if(confirmPassword!==password)setError('check password')
            else setError('Error')
        }
    }
    useEffect(()=>{
        if(userInfo)navigate('/')
    },[userInfo])

    return (
        <Box display='flex'>
        {/* LOGIN FORM CONTAINER */}
        <Box sx={{ flex: '1 1 400px', display: 'flex', alignItems:'center', minHeight:'95vh', justifyContent: {xs:'center',md:'right'} }}>
            <Box sx={{ display: 'flex',flex:'1 1 auto', flexDirection: 'column', maxWidth: '500px',  px:2, textAlign:'center' }}>
                <Typography variant='h3' gutterBottom>REGISTER</Typography>
                <Typography varaint='body2' gutterBottom color='error'>{error&&error}</Typography>
                {/* EMAIL AND PASSWORD INPUT */}
                <OutlinedInput placeholder='email' sx={{mb:2}} onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <OutlinedInput placeholder='password' sx={{mb:2}} type='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <OutlinedInput placeholder='password' sx={{mb:4}} type='password' onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
                {/* END EMAIL AND PASSWORD INPUT */}
                {/* ACTION GROUP */}
                <Button variant='contained' onClick={handleRegister} sx={{mb:2}}>{loading?'LOADING...':'REGISTER'}</Button>
                <Button variant='text' size='small' onClick={()=>navigate('/user/login')}>or LOGIN</Button>
                {/* END ACTION GROUP */}
            </Box>
        </Box>
        {/* IMAGE CONTAINER */}
        <Box sx={{ flex: '1 1 500px', display: { xs: 'none', md: 'flex' }, aspectRatio: '1/1' }}>
            <img className='image-fit-cover' src='/images/homeimage.jpg'/>
        </Box>
    </Box>
    )
}

export default Register
