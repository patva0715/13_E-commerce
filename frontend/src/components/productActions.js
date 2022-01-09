import { PRODUCT_DETAILS_RESET, PRODUCT_LIST_FAIL,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_REQUEST, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../constants/productConstants"
import axios from 'axios'

export const resetProductDetail=()=>async(dispatch)=>{
    dispatch({type:PRODUCT_DETAILS_RESET,payload:[]})

}
//ACTION CREATOR FOR ALL PRODUCTS
export const listProducts=()=>async(dispatch)=>{
    try{
        dispatch({type:PRODUCT_LIST_REQUEST,payload:[]})

        const {data}=await axios.get('/api/products')
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
export const getProductDetail=(id)=>async(dispatch)=>{
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