import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const stateStr = sessionStorage.getItem('state')

let product_list = [];

if (stateStr) {
    const state = JSON.parse(stateStr);
    product_list = state.product_list;
}

const Goods_Products = {
    product_list,
    product_detail: {}
}

function productsReducer(state = Goods_Products, action) {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            {
                let newState = {...state};
                newState.product_list = action.payload.product_list
                return newState;
            }
        case 'LOAD_MORE_PRODUCT':
            {
                let newState = {...state};
                newState.product_list = [
                    ...newState.product_list, 
                    ...action.payload.product_list
                ]
                return newState;
            }
        case 'SET_DETAIL': 
            // V1
            // let newState = {...state};
            // newState.product_detail = action.payload.product_detail;
            // return newState;

            // V2
            return {...state, product_detail: action.payload.product_detail};
        default:
            return state;
    }
    
}


const store = createStore(
    productsReducer,
    // 用来处理 异步数据
    applyMiddleware(thunk)
);

store.subscribe(function() {
    console.log(store.getState())
    const state = store.getState();
    
    sessionStorage.setItem('state', JSON.stringify(state))
});

export default store;