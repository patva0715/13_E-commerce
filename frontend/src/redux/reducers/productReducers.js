import { PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST, 
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_RESET, 
    PRODUCT_LIST_CATEGORY_CHANGE} from "../constants/productConstants"

//ALL PRODUCT REDUCER
export const productListReducer = (state={products:[],category:[]},action) =>{
    // console.log('in reducer')
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {...state,loading:true, products:[]}
        case PRODUCT_LIST_SUCCESS:
            return {...state,loading:false, products:action.payload}
        case PRODUCT_LIST_FAIL:
            return {loading:false, error:action.payload}
        case PRODUCT_LIST_CATEGORY_CHANGE:
                return {...state,category:action.payload}
        default:
            return state

        }
}

//SINGLE PRODUCT REDUCER
export const productDetailsReducer = (state={product:{reviews:[]}},action) =>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true,product:{}}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading:false, product:action.payload}
        case PRODUCT_DETAILS_FAIL:
            return {loading:false, error:action.payload}
        case PRODUCT_DETAILS_RESET:
            return {loading:false,product:{}}
        default:
            return state

        }
    }
