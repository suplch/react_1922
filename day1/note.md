### ReactJS 
中文官网地址 : https://react.docschina.org
```html
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
```
```
<script type="text/babel">
...
</script>
```
- 声明式, 组件化, 一次学习，随处编写
- 函数式编程风格, 直白的说就是纯 JavaScript 编程思维 
- react Hello World
- jsx 语法
    + 原生js写法
    + jsx 语法糖
    + 渲染一个列表
- react 组件构造方式
    + 函数方式
        - 函数参数作为组件参数
        - 函数返回 jsx 作为 组件外观
    + class 类方式
        - 类的构造函数参数作为组件参数
        - render 方法返回 jsx 作为组件外观
- TodoList 综合演示

- 数据挂载
    + 通过属性挂载
    + 通过类状态挂载
    + 纯函数组件是无状态组件

- 事件处理
- 受控组件与非受控组件
    + 受控相当于双向绑定
    + 非受控利用 ref 直接处理dom元素

### 安装React 脚手架工具
- npm install create-react-app -g
- npx create-react-app my-app
- cd my-app
- npm run start
