import {createStore, combineReducers,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productReducer,productDetailsReducer } from './reducer/productsReducer';

const reducer= combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer
})

let intialState={}

const middleware=[thunk]
const store=createStore(reducer, intialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;