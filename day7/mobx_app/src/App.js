import React from 'react';
import './App.css';

function App(props) {
  console.log('App 组件被渲染 ', props);
  const nameRef = React.createRef();
  const picRef = React.createRef();

  const { goods_list, cart, timer, addGoods, delGoods, addGoodsToCart } = props.store;
  const lis  = goods_list.map((goods) => {
    return (
      <li key={goods.id}>
        { goods.name }, { goods.pic }
        <button onClick={ () => { removeGoods(goods) } }>删除</button> 
        <button onClick={ () => { addToCart(goods) } }>添加到购物车</button> 
      </li>
    )
  });

  const itemLis = cart.items.map((item) => {
    return (
      <li key={item.id}>
        {item.name} {item.pic}, 
        <button onClick={ ()=> { item.count > 1 && item.count-- } }>-</button>
        {item.count}
        <button onClick={ ()=> { item.count++ } }>+</button>
      </li>
    )
  });

  function removeGoods(goods) {
    delGoods(goods.id);
  }

  function addToCart(goods) {
    addGoodsToCart(goods)
  }

  function commitGoods() {
    const name = nameRef.current.value;
    const pic = picRef.current.value;

    addGoods({
      name, pic
    })
  }

  return (
    <div className="App">
      { timer }
      <ul>
        { lis }
      </ul>

      <input ref={nameRef} />
      <input ref={picRef} />
      <button onClick={ commitGoods }>添加</button>
      <hr/>
      <ul>
        { itemLis }
      </ul>
    </div>
  );
}

export default App;

let sum = 0;

// 1, 纯函数 输出只根 输入有关, 2, 而且不影响系统的其他状态
// 纯函数 幂等性
// get 幂等性
function add(a, b) {
  let c = a + b;
  return c;
}

// 已经不是纯函数了, 产生了 ***副作用***
function add2(a, b) {
  let c = a + b;
  sum = c;
  return c
}

// 已经不是纯函数了, 返回值 不定
function now() {
  return new Date().getTime();
}

