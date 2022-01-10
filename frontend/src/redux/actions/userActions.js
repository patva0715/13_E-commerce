import axios from 'axios';
import { ORDER_LIST_MY_RESET } from '../constants/orderConstants';
import{USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_UPDATE_PROFILE_SUCCESS, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_DETAILS_RESET} from '../constants/userConstants'

export const login = (email,password)=>async(dispatch)=>{
    try{
        dispatch({
            type:USER_LOGIN_REQUEST
        })
        const config={
            header:{
                'Content-Type': 'application/json'
            }
        }

        const {data}=await axios.post('/api/users/login',{email,password},config)

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('GrooveUserInfo', JSON.stringify(data))
    }catch(error){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.message ?error.response.data.message: error.message
        })
    }
}
export const logout=()=>async(dispatch)=>{
    try{
        localStorage.removeItem('GrooveUserInfo')
        dispatch({
            type:USER_LOGOUT
        })
        dispatch({
          type:USER_DETAILS_RESET
        })
        dispatch({
          type:ORDER_LIST_MY_RESET
        })
    }catch(err){
        console.log(err)
    }
}
export const register = (email,password,name)=>async(dispatch)=>{
    try{
        dispatch({
            type:USER_REGISTER_REQUEST
        })
        const config={
            header:{
                'Content-Type': 'application/json'
            }
        }
        const {data}=await axios.post('/api/users',{email,password,name},config)
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('GrooveUserInfo', JSON.stringify(data))
    }catch(error){
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.message ?error.response.data.message: error.message
        })
    }
}
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    })
    const {userLogin: { userInfo }} = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`/api/users/${id}`, config)
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    })
  }
}
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    })
    const {userLogin: { userInfo }} = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(`/api/users/profile`,user, config)
    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: message,
    })
  }
}