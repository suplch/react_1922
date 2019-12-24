### React.js 组件通信与生命周期

- 组件的通信方式
    + 父子组件通信方式
        - 传递数据与传递方法
        - ref 标记
    + 非父子组件通信方式
        - 状态提升
        - 发布订阅模式, EventBus
    + context 状态树传参

```ecmascript 6

const MyContext = React.createContext(defaultValue);

<MyContext.Provider value={/* 某个值 */}>

</MyContext.Provider>

MyClass.contextType = MyContext;
this.context // 获取上下文参数

<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>

```
- 生命周期各个阶段
    + 初始化阶段
        - constructor
        - getDerivedStateFromProps
        - render
        - componentDidMount
    + 运行中阶段
        - getDerivedStateFromProps
        - shouldComponentUpdate
        - render
        - getSnapshotBeforeUpdate
        - componentDidUpdate
    + 销毁阶段
        - componentWillUnmount
