
### Redux 状态管理
- https://www.redux.org.cn

- 实现全局状态管理
- 方便大型项目组件共享数据
- Action, Reducer, Store
```ecmascript 6
(state, action) => { return newState }
```

```ecmascript 6
const { createStore } = require('redux');

function counter(state = 0, action) {
    switch( action.type ) {
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
}

let store = createStore(counter);

store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch({ type: 'INCREMENT'});

```
### React Redux 集成
```ecmascript 6
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

function reducerA(state = 0, action) {
    return state;
}

function reducerB(state = 0, action) {
    return state;
}

const appReducer = combineReducers({
    moduleA: reducerA,
    moduleB: reducerB
});

let store = createStore(appReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
```
```ecmascript 6
import { connect } from 'react-redux';
// 映射 state 到 组件 props
const mapStateToProps = (state) => {
    return {
        property: state.property
    }
};
// 映射 dispatch 到 组件 props
const mapDispatchToProps = (dispatch) => {
    return {
        onEvent: () => {
            dispatch({type: 'ACTION_NAME'});
        }
    }
};
//   高阶函数包装组件, 导出被包装的组件
export default connect(mapStateToProps, mapDispatchToProps)(组件)

```
### Redux-thunk
- https://github.com/reduxjs/redux-thunk
- 实现 redux 的 异步操作
```ecmascript 6
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

//...
dispatch({type: 'INC'});
// 或者, 异步调用
dispatch((dispatch, getState) => {

    setTimeout(function () {
        console.log(getState());
        dispatch({type: 'INC'});
    }, 1000);
})
```
