
import { createStore } from 'redux';

import { combineReducers } from 'redux-immutable'

import {goodsReducer} from './goods-reducer';
import {cartReducer} from './cart-reducer';


const appReducer = combineReducers({
    goods: goodsReducer,
    cart: cartReducer
})

const store = createStore(appReducer);
export default store;
/* 

    function combineReducer(obj) {
        ;
        obj.cart
        return function(state, action) {
            let newState111 = obj.goods(state, action);
            let newState222 = obj.cart(state, action);
            return {
                goods: newState111,
                cart: newState222
            }
        }
    }

*/