import { PRODUCT_LIST_FAIL,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_REQUEST, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../constants/productConstants"
import axios from 'axios'

//ACTION CREATOR FOR ALL PRODUCTS
export const listProducts=()=>async(dispatch)=>{
    try{
        dispatch({type:PRODUCT_LIST_REQUEST,payload:[]})

        const {data}=await axios.get('/api/products')
        // console.log(data)
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload:data
        })
    }catch(error){
        // console.log("PRODUCT ACTION ERROR")
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload:error.response && error.response.data.message ?error.response.data.message: error.message
        })
    }
}

//ACTION CREATOR FOR A SINGLE PRODUCT
export const listProductDetails=(id)=>async(dispatch)=>{
    try{
        dispatch({type:PRODUCT_DETAILS_REQUEST,payload:[]})

        const {data}=await axios.get(`/api/products/${id}`)
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload:data
        })
    }catch(error){
        // console.log("PRODUCT ACTION ERROR")
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:error.response && error.response.data.message ?error.response.data.message: error.message
        })
    }
}