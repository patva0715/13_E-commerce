import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import { productDetailsReducer, productListReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userDetailsReducer, userLoginReducer,userRegisterReducer, userUpdateProfileReducer} from './reducers/userReducers'
import { orderCreateReducer,orderDetailsReducer, orderPayReducer, orderListMyReducer } from './reducers/orderReducers'

const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderListMy:orderListMyReducer
})

const cartItemsFromStorage = localStorage.getItem('GrooveCartItems')?JSON.parse(localStorage.getItem('GrooveCartItems')):[]
const userInfoFromStorage = localStorage.getItem('GrooveUserInfo')?JSON.parse(localStorage.getItem('GrooveUserInfo')):null
const shippingAddressFromStorage = localStorage.getItem('GrooveShippingAddress')?JSON.parse(localStorage.getItem('GrooveShippingAddress')):{}

const initialState={
    cart:{
        cartItems:cartItemsFromStorage,
        shippingAddress:shippingAddressFromStorage
    },
    userLogin:{userInfo:userInfoFromStorage}
}

const middleware=[thunk]

const store=createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store