import React from 'react'
import { Avatar, Menu, MenuItem } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {logout} from '../redux/actions/userActions'
const HeaderAvatar = () => {
    let navigate=useNavigate()
    const dispatch=useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { userInfo } = useSelector(state => state.userLogin)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleNavigate = (link) =>{
        if(link==='/logout'){
            dispatch(logout())
            navigate('/')
        }
        else navigate(link)
        handleClose()
        
    }
    return (
        <>
            <Avatar sx={{ width: '30px', height: '30px',cursor:'pointer', mr: 1 }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick} />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {userInfo ?
                    <div>
                        <MenuItem onClick={()=>handleNavigate('/user/profile')}>Profile</MenuItem>
                        <MenuItem onClick={()=>handleNavigate('/order/')}>My Orders</MenuItem>
                        <MenuItem onClick={()=>handleNavigate('/logout')}>Logout</MenuItem>
                    </div> :
                    <MenuItem onClick={()=>handleNavigate('/user/login')}>Login</MenuItem>
                }

            </Menu>
        </>
    )
}

export default HeaderAvatar
