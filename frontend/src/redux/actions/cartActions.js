import axios from "axios"
import { CART_ADD_ITEM,CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants"

export const addToCart=(id,qty)=>async(dispatch,getState)=>{
    const {data}=await axios.get(`/api/products/${id}`)

    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            id:data._id,
            name:data.name,
            price:data.price,
            qty:qty
        }
    })
    localStorage.setItem('GrooveCartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart=(id)=>async(dispatch,getState)=>{
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:id
    })
    localStorage.setItem('GrooveCartItems',JSON.stringify(getState().cart.cartItems))
}
export const saveShippingAddress=(data)=>(dispatch)=>{
    dispatch({
        type:CART_SAVE_SHIPPING_ADDRESS,
        payload:data,
    })
    localStorage.setItem('GrooveShippingAddress',JSON.stringify(data))
}
export const savePaymentMethod=(data)=>(dispatch)=>{
    dispatch({
        type:CART_SAVE_PAYMENT_METHOD,
        payload:data,
    })
    localStorage.setItem('GroovePaymentMethod',JSON.stringify(data))
}