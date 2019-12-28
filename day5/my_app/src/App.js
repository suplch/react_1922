import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Redirect from="/" to="/home"/>
          <Link to={ '/home' }>首页</Link>
          <Link to={ '/about' }>关于</Link>
          <Link to={ '/products' }>产品列表</Link>

          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/products" exact component={Products} />
            <Route path="/product_detail/:pid" exact component={ProductDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App

/*
  <></>  代表 react 里面的空标签 相当于 vue 里面的 template
  function Route(props) {
    const Comp = props.component;

    let comp = null;
    if (location.pathname === props.path) {
      //   location.pathname
      //    /product_detail/:pid
      //    /product_detail/222
      let props = {
        history: {.........},
        location: {......},
        match: {
          params: { pid: }
        }
      }
      comp = <Comp {...props} />
    }

    return (
      <>
        { comp }
      </>
    )
  }

  function Link(props) {
    return (
      <a href={ props.to }>{ props.children }</a>
    )
  }
*/


/*
    // 此 伪代码 帮助大家理解 connect 函数
    function connect(mapStateToProps, mapDispatchToProps) {

        let store = fromSomeWhere();
        
        const propsA = mapStateToProps(store.getState())
        const propsB = mapDispatchToProps(store.dispatch)

        const props = {...propsA, ...propsB};

        return function(UserComponent) {
            return function(props) {
                return (
                    <div>
                        <UserComponent {...props} />
                    </div>
                )
            }
        }
    }
*/