import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'

import {App} from './App'

import './style.css';
import wlh from './wlh.jpg';
import {sum} from './utils/calculator';

console.log('hello world', sum(1, 100));

document.write("<p>Hello World!!!!!!!!</p>");
alert(wlh);
document.write(`<img src="${wlh}"/>`);



ReactDOM.render(<App/>,
    document.getElementById('app'));
