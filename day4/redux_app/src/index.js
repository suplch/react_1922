import { Provider } from 'react-redux';

import { createStore, combineReducers } from 'redux';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import AppTestRedux from './AppTestRedux';

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
// combineReducers 用来将小的 业务reducer 函数 组合成大的 reducer函数
const appReducer = combineReducers({
    counter: Counter,
    multiple: Multiple
})

const store = createStore(appReducer);

// <Provider store= 提供一个 全局的 store 对象 注入到组件树种
ReactDOM.render(
    <Provider store={store}>
        <AppTestRedux />
    </Provider>, 
    document.getElementById('root')
);



