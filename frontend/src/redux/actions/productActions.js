import { PRODUCT_DETAILS_RESET, PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_LIST_CATEGORY_CHANGE } from "../constants/productConstants"
import axios from 'axios'

export const resetProductDetail = () => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_RESET, payload: [] })

}
//ACTION CREATOR FOR ALL PRODUCTS
export const listProducts = (category) => async (dispatch) => {
    let dataFromServer
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST, payload: [] })
        if (category&&category.length>0) {
            category.join('%')
            console.log("FETCHING BY CATEGORY")
            // console.log("CATEGORY:", category)
            const { data } = await axios.get(`/api/products/category?term=${category}`)
            dataFromServer=data
        } else {
            console.log("FETCHING ALL")
            const { data } = await axios.get('/api/products')
            dataFromServer=data
        }
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: dataFromServer
        })
    } catch (error) {
        // console.log("PRODUCT ACTION ERROR")
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

//ACTION CREATOR FOR A SINGLE PRODUCT
export const getProductDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: [] })

        const { data } = await axios.get(`/api/products/${id}`)
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        // console.log("PRODUCT ACTION ERROR")
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

//ACTION CREATOR FOR CHANGING CATEGORY
export const changeCategory = (category) => (dispatch) =>{
    dispatch({type:PRODUCT_LIST_CATEGORY_CHANGE, payload:category})
}