import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import AppTestRedux from './AppTestRedux';

import store from './store';

// <Provider store= 提供一个 全局的 store 对象 注入到组件树种
ReactDOM.render(
    <Provider store={store}>
        <AppTestRedux />
    </Provider>, 
    document.getElementById('root')
);



