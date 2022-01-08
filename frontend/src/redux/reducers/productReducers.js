import { PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST, 
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_DETAILS_FAIL } from "../constants/productConstants"

//ALL PRODUCT REDUCER
export const productListReducer = (state={products:[]},action) =>{
    // console.log('in reducer')
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true, products:[]}
        case PRODUCT_LIST_SUCCESS:
            return {loading:false, products:action.payload}
        case PRODUCT_LIST_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state

        }
}

//SINGLE PRODUCT REDUCER
export const productDetailsReducer = (state={product:{reviews:[]}},action) =>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true,...state}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading:false, product:action.payload}
        case PRODUCT_DETAILS_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state

        }
    }
