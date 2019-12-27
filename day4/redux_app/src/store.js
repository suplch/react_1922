
import { createStore, combineReducers } from 'redux';

// reducer 模式的函数

function Counter(state = 0, action) {
    switch(action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        default:
            return state;
    }
}

function Multiple(state = 10, action) {
    switch(action.type) {
        case 'Multi':
            return state * 10;
        case 'Div':
            return state / 10;
        default:
            return state;
    }
}

const goods_list = [
    {id: '111', name: '西瓜', pic: '🍉', price: 10},
    {id: '222', name: '橘子', pic: '🍊', price: 5},
    {id: '333', name: '哈密瓜', pic: '🍈', price: 8},
];

function GoodsReducer(state = goods_list, action) {
    switch(action.type) {
        case 'ADD_GOODS':

        default:
            return state;
    }
}

const items = [
    {id: '111', name: '西瓜', pic: '🍉', price: 10, count: 1},
    {id: '222', name: '橘子', pic: '🍊', price: 5, count: 2},
]
function CartReducer(state= items, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const goods = action.payload.goods;
            alert(action);
            //return [...items, {...action.payload.goods, count: 1}];

            // let newState = [...state];

            // newState.push({
            //     ...goods,
            //     count: 1
            // });
            // console.log(newState);
            // return newState;

            let index = state.findIndex(function(item) {
                return item.id === goods.id
            })

            if (index !== -1) {
                // 方法一
                // let arr1 = state.slice(0, index);
                // let arr2 = state.slice(index + 1);
                // let item = state[index];
                // return [...arr1, {...item, count: item.count + 1} ,  ...arr2]

                // 方法二
                const newState = [...state];
                let item = state[index];
                newState.splice(index, 1, {...item, count: item.count + 1})
                return newState;

            } else {
                return [...state, {...goods, count: 1}]
            }
        default:
            return state;
    }
}

// combineReducers 用来将小的 业务reducer 函数 组合成大的 reducer函数
const appReducer = combineReducers({
    counter: Counter,
    multiple: Multiple,
    goods: GoodsReducer,
    cart: CartReducer
})

const store = createStore(appReducer);

export default store;