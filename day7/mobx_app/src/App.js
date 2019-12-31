import React from 'react';
import './App.css';

function App(props) {
  const nameRef = React.createRef();
  const picRef = React.createRef();

  const { goods_list, timer, addGoods, delGoods } = props.store;
  const lis  = goods_list.map((goods) => {
    return (
      <li key={goods.id}>
        { goods.name }, { goods.pic }
        <button onClick={ () => { removeGoods(goods) } }>删除</button>  
      </li>
    )
  });

  function removeGoods(goods) {
    delGoods(goods.id);
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

    </div>
  );
}

export default App;
