import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const Goods_Products = {
    product_list: [
        // {name: '草莓', pic: '🍓'},
        // {name: '橙子', pic: '🍊'},
    ]
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
        default:
            return state;
    }
    
}


const store = createStore(
    productsReducer,
    applyMiddleware(thunk)
);

export default store;