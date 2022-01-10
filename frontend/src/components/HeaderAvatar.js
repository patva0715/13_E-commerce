import React from 'react'
import { Avatar, Menu, MenuItem } from '@mui/material'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const HeaderAvatar = () => {
    let navigate=useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { userInfo } = useSelector(state => state.userLogin)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
                    <>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </> :
                    <MenuItem onClick={()=>navigate('/user/login')}>Login</MenuItem>
                }

            </Menu>
        </>
    )
}

export default HeaderAvatar
