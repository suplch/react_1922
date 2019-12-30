import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import './index.css';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

/*

import { fromJS } from 'immutable';
// 是一个immutable 提供的 函数, 用来将 原始的 javascript 对象 转换为 immutable 不可变对象
// 返回一个 immutable Map 对象
const im_obj = fromJS({
    name: '张三',
    age: 18,
    address: {
        city: '北京',
        street: '沙洋路'
    },
    hobbies: [
        {text: '抽烟', level: 1},
        {text: '喝酒', level: 2},
        {text: '烫头', level: 3},
    ]
})

console.log(im_obj);

console.log(im_obj.get('name'))
console.log(im_obj.get('age'))

console.log(im_obj.get('address').get('city'))
// getIn 是一个快捷的访问 深层次 对象属性的方法
console.log(im_obj.getIn(['address', 'city']));

const a_new_imobj = im_obj.setIn(['address', 'city'], '天津');
console.log(im_obj.getIn(['address', 'city']));
console.log(a_new_imobj.getIn(['address', 'city']))


// 返回一个 List 类型的 immutable 不可变对象
const hobbies = im_obj.get('hobbies');
console.log(hobbies)
// ************
// set setIn  update  updateIn  都不会修改对象本身, 而是 返回一个新对象


const new_hobbies = hobbies.push(fromJS({text: '学习', level: 4}))

const another = im_obj.set('hobbies', new_hobbies);
console.log('another', another.getIn(['hobbies', 3, 'text']))

// update 用来更新指定属性 值, 需要提供一个回调函数 回调函数的返回值 最为最终的值
const another111 = im_obj.update('hobbies', function(hobbies) {
    return hobbies.push(fromJS({text: '打游戏', level: 5}))
})
console.log('another111', another111);
// updateIn 用来更新指定路径属性的 值, 需要提供一个回调函数, 回调函数的返回值 最为最终的值
const another222 = im_obj.updateIn(['hobbies', 2], function(hobby) {
    return hobby.set('text', '洗澡').set('level', 5).set('hot', 50)
})
console.log('another222', another222);

console.log('添加 一个 hobby')
console.log(hobbies);
console.log(new_hobbies.get(2))
console.log(new_hobbies.get(3))

// 返回 一个 immutable Map
const hobby_0 = hobbies.get(0);

console.log(hobby_0);

const hobby_1 = hobbies.get(1);

console.log(hobby_1)

console.log(im_obj.get('hobbies').get(1).get('text'))


const other_imObj = im_obj.setIn(['hobbies', 1, 'text'], '喝酒不健康');
console.log(im_obj.get('hobbies').get(1).get('text'))
console.log(other_imObj.get('hobbies').get(1).get('text'))

// 原始的 js 对象 会被转换为 immutable Map 对象, 原始 数组  会被转换为 List
// Map 和 List 都是 immutable 对象

// 如何改变对象的属性呢?
const new_im_obj = im_obj.set('name', '李四');

console.log('---------原始的 immutable 对象数据保持不变-----------')
// 看看是否变了?
console.log(im_obj.get('name'))
console.log(im_obj.get('age'))

console.log('---------新对象 包含了变化了的数据-----------')

// new_im_obj 里面即包含变化的数据, 也包含没有变的数据
console.log(new_im_obj.get('name'))
console.log(new_im_obj.get('age'))

const newnew_im_obj = new_im_obj.set('age', 20);
console.log(new_im_obj.get('age'))

console.log(newnew_im_obj.get('age'))






// 参考 图 immutable3.png
const oldRoot = fromJS({
    to: 7,
    A: 15,
    tea: 3,
    ted: 4,
    ten: 12,
    i: 11,
    in: 5,
    inn: 9
})
const newRoot = oldRoot.set('tea', 14);
console.log(oldRoot.get('tea'));
console.log(newRoot.get('tea'));

*/