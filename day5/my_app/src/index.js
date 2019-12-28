import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import './index.css';
import App from './App';
// import axios from 'axios';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


// axios.get('/hello').then(function(result) {
//     console.log(result.data)
// })
