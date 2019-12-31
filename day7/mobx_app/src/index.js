import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react'
import './index.css';
import App from './App';

import store from './store';

const NewApp = observer(App)

ReactDOM.render(<NewApp store={store} />, document.getElementById('root'));



/*  ------------------------------------------
import { decorate, observable, autorun, computed } from 'mobx';

// 实例1 对类进行 观察
class Goods {
    constructor(price, count, name) {
        this.price = price;
        this.count = count;
        this.name = name;
        this.weight = 100;
        // 自动执行一下 回调函数, 当依赖 observable 属性发生变化后再次执行 回调函数
        autorun(() => {
            console.log(this.price, this.count, this.name, this.weight, `合计: ${this.total}`);
        });
    }

    get total() {
        return this.price * this.count;
    }
}

decorate(Goods, {
    count: observable,
    price: observable,
    name: observable,
    weight: observable,
    total: computed
})

const goods = new Goods(10, 200, '苹果');
console.log('商品: ', goods);

goods.count = 300;
goods.price = 20;
goods.name = '香蕉'

setTimeout(function() {
    goods.weight = 500
}, 3000);
*/

/*  ------------------------------------------
// 实例2 对原始的对象 进行代理, 当通过代理对象 访问 修改数据后,对应的 autorun 回调会被自动执行
import { observable, autorun } from 'mobx';

const apple= {
    name: '苹果',
    price: 10,
    count: 100
}

const appleProxy = observable.object(apple)
console.log(apple);
console.log(appleProxy)

autorun(() => {
    console.log(appleProxy.name, appleProxy.price, appleProxy.count);
});

appleProxy.price = 12;
appleProxy.count = 200
*/

/* ------------------------------------------
// 实例3
import { observable, autorun } from 'mobx';

const hobbies = [{
    text: '打游戏', level: 5,
}, {
    text: '学习', level: 2,
}]
const hobbiesProxy = observable.array(hobbies);

autorun(() => {
    console.log(`我有 ${hobbiesProxy.length} 个爱好`)
    for (let hobby of hobbiesProxy) {
        console.log(hobby.text, hobby.level)
    }
    console.log('-----------------')
})

setTimeout(function() {
    hobbiesProxy.push({
        text: '旅游', level: 3
    })

    setTimeout(function() {
        hobbiesProxy.shift();
    }, 3000);

}, 3000);
*/

/*
// 实例 4
import { decorate, observable, when } from 'mobx';

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.state = '饱了'; // 饿了, 饱了
        when(() => {
            console.log('开始自检');
            return this.state === '饿了'
        }, () => {
            console.log('开吃')
        });
    }
}

const PersonProxy = decorate(Person, {
    name: observable,
    age: observable,
    state: observable
});

const aPerson =  new PersonProxy('张三', 18)

console.log(aPerson);
setTimeout(function() {
    aPerson.state = '饿了'
}, 3000)
*/
/*
const { observable,  reaction } =  require('mobx');

const todos = observable([
    {
        title: "起床",
        done: true,
    },
    {
        title: '刷牙',
        done: false
    }
]);

reaction(
    function() {
        return todos.length
    },
    function(length, reaction) {
        console.log(length);
        console.log(todos.map(todo => todo.title).join(", "))
        reaction.dispose();
    }
);

todos.push({ title: "吃饭", done: false });

todos.push({ title: "学习 前端", done: false });
*/