### Mobx
- https://cn.mobx.js.org
- npm install mobx --save
## 对类进行观察监听
```ecmascript 6
const { observable, autorun, decorate, computed, when, reaction } =  require('mobx');

class OrderLine { // 生命一个类
    constructor(price) {
        this.amount = 1;
        this.price = price;
        autorun(() => {  // autorun 函数的回调函数会在 可观看属性发生变化的时候调用
            console.log('单价: ', this.price, ' 数量: ', this.amount, ' 合计: ', this.total)
        })
    }
    get total() {
        return this.price * this.amount;
    }
}
// 通过 decorate 函数对类进行修饰, 
decorate(OrderLine, { 
    price: observable,  // 将类的 price 属性修饰为 observable, 表示他是可观察的
    amount: observable,  // 将类的 amount 属性修饰为 observable, 表示他是可观察的
    total: computed      // 将类的 total 声明为 computed 表示他是一个计算属性
});
let order = new OrderLine(10);
order.amount = 5;
order.price = 1.5
```
- observable 包装一个可观察对象
- autorun   注册一个自动运行的回调函数, 当 函数内部依赖的可观察属性 或 计算属性 发生变化的时候 回调函数将会被自动调用
- decorate    用来将一个类 修饰为可观察类, 第二个参数指明了 哪些属性需要观察
- computed    声明 一个计算属性

## 对对象进行观察监听
```ecmascript 6
const { observable, autorun, decorate, computed } =  require('mobx');
const orderLine = observable.object({  // 将对象包装为可观察对象, 对应的属性发生变化后 注册的 autorun 回调函数会自动调用
    price: 0,
    amount: 1,

    get total() {
        return this.price * this.amount
    },

    set total(total) {
        this.price = total / this.amount // 从 total 中推导出 price
    }
});


autorun(() => {
    console.log('开始计算', orderLine.price, orderLine.amount)
});

orderLine.price = 2;
orderLine.amount = 3;
orderLine.total = 500
```
## 对数组进行观察监听
```ecmascript 6
const { observable, autorun, decorate, computed } =  require('mobx');

// https://cn.mobx.js.org/refguide/autorun.html
var numbers = observable([1,2,3]);
var sum = computed(() => {  // 创建一个计算属性 sum
    numbers.reduce((a, b) => { 
        return a + b
    }, 0)
});

var disposer = autorun(() => console.log(sum.get()));  // sum 计算对象, 调用 get 方法 获取计算值, 依赖 numbers 数组的变化
// 输出 '6'
numbers.push(4);
// 输出 '10'

disposer();
numbers.push(5);

autorun(() => {
    console.log(numbers)  当依赖的number 数组发生变化后 本回调函数会自动执行
});

numbers.push(100)
```
### when 函数的用法
- when 函数有俩个回调函数类型的参数, 当第一个回调函数 返回true 的时候, 那么第二个 回调 会执行
```ecmascript 6
const { observable, autorun, decorate, computed, when } =  require('mobx');
class MyResource {
    constructor() {
        this.visible = true;
        when(
            // 一旦...
            () => !this.isVisible,
            // ... 然后
            () => this.dispose()
        );
    }
    get isVisible() {
        return this.visible;
    }
    setVisible(visible) {
        this.visible = visible;
    }
    dispose() {
        console.log('dispose')
    }
}
decorate(MyResource, {
    isVisible: computed,
    visible: observable
});

const resource = new MyResource();

setTimeout(function () {
    resource.setVisible(false);
}, 3000)

// 如果没提供 effect 函数，when 会返回一个 Promise 。它与 async / await 可以完美结合。
// async function() {
//     await when(() => that.isVisible)
//     // 等等..
// }
```
## reaction  简化版的 autorun
- reaction 有两个回调函数参数, 第一个回调的返回值, 会作为第二个的参数
```ecmascript 6
const { observable, autorun, decorate, computed, when, reaction } =  require('mobx');

const todos = observable([
    {
        title: "Make coffee",
        done: true,
    },
    {
        title: "Find biscuit",
        done: false
    }
]);


const reaction1 = reaction(
    () => todos.length,
    length => console.log("reaction 1:", todos.map(todo => todo.title).join(", "))
);

todos.push({ title: "explain reactions", done: false });
todos.push({ title: "学习 前端", done: false });

```

```ecmascript 6
const { observable, autorun, decorate, computed, when, reaction } =  require('mobx');


const counter = observable({ count: 0 });

// 只调用一次并清理掉 reaction : 对 observable 值作出反应。
const reaction3 = reaction(
    () => counter.count,
    (count, reaction) => {
        console.log("reaction 3: invoked. counter.count = " + count);
        reaction.dispose();  // 撤销掉 reaction 的 反应 只调一次
    }
);

counter.count = 1;
// 输出:
// reaction 3: invoked. counter.count = 1

counter.count = 2;
// 输出:
// (There are no logging, because of reaction disposed. But, counter continue reaction)

console.log(counter.count);

```
### mobx-react react对 mobx 的封装
- npm install mobx-react --save
```JSX
import React from 'react';
import ReactDOM from 'react-dom';
import {observable, action} from 'mobx';
import { observer } from 'mobx-react';

let appState = observable({
    timer: 0
});

setInterval(action(() => {
    appState.timer += 1;
}), 1000);

appState.resetTimer = action(() => {
    appState.timer = 0;
});

let App = observer(class App extends React.Component {

    render() {
        return (
            <div>
                <h1>计时器: {this.props.appState.timer}</h1>
            </div>
        )
    }
});


ReactDOM.render(<App appState={appState} />, document.getElementById('root'));
```
