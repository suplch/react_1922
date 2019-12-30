
import { createStore } from 'redux';
// 导入 combineReducers 函数 用来组装 immutable 类型的 redux
import { combineReducers } from 'redux-immutable'

import {goodsReducer} from './goods-reducer';
import {cartReducer} from './cart-reducer';

// 组装 子模块
const appReducer = combineReducers({
    goods: goodsReducer, // 商品列表模块
    cart: cartReducer // 购物车模块
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