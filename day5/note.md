### react-router
- https://reacttraining.com/react-router/web/guides/quick-start
- npm install react-router-dom
- 组件化的路由配置
```ecmascript 6
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Link to={`/`}>111</Link>
        <Link to={`${match.path}child111`}>111</Link>
        <Switch>
            <Redirect from="/" to="/home" exact />
            <Route path="/home" exact component={Home}/>
            <Route path="/user" exact component={User}/>
            <Route path="/user/:id" exact component={UserDetail}/>
            ...
        </Switch>
        <Route component={ways}/>
      </Router>
  )
}

```
```
<Router/>  
开启路由配置
 H5 history 路由BrowserRouter, 需要服务器的配合, 和浏览器的支持
 HashRouter 基于锚点 # 的路由 , 不需要服务端的配合
<Link to={}>a link</Link>
<Route> 
配置 具体的路由项, path 属性指定路径, 
component 指定具体的组件 或一个 有props 返回jsx 的函数
exact 是否精确匹配
不指定 path 参数 表示 总是匹配组件, 结合 Switch 可以实现 404 匹配
<Redirect> 用来对路由地址 进行重定向
<Switch> 只选择一个匹配的路由

子路由 不是通过全局设置 
而是通过具体的组件进行叠加

在具体页面组件中 继续使用 <Route path="..." component={}/>进行匹配

function AComponent(props) {
    console.log(props)  match, location, history
}

```

