import React from 'react';
import ReactDOM from 'react-dom'

import Vue from 'vue';

import { sum } from './calu';

import VueApp from './VueApp.vue';

import { App } from './App';
alert('hello hahahahah');
alert(sum(1, 100));
ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('react-app')
);

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('react-app222')
);


new Vue({
    render: h => h(VueApp),
  }).$mount('#vue-app')
  



// import { add, sub, sum } from './calu';
// import './style';
// import logo from  './logo';
// alert(logo)
// console.log('Hello world', add(2, 4))

// console.log('bye', sub(5, 2))

// console.log(sum(1, 100))

// const div = document.createElement("div");

// div.className = "box";
// div.innerHTML = "Hello";

// document.body.appendChild(div);
// const img = document.createElement('img');
// img.src = logo;
// document.body.appendChild(img)