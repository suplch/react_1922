import React from 'react';
import {HashRouter, Switch, Link, Route} from 'react-router-dom';

import GoodsList from './views/GoodsList';
import ShopCart from './views/ShopCart';

import './App.css';

function App() {
  return (
    <HashRouter>
      <Link to={'/goods_list'}>商品列表</Link> | 
      <Link to={'/shopcart'}>购物车</Link>
      <Switch>
        <Route path={'/goods_list'} exact component={GoodsList} />
        <Route path={'/shopcart'} exact component={ShopCart} />
      </Switch>
      app
    </HashRouter>

  );
}

export default App;
