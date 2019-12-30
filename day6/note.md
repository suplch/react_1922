### Immutable JS
- http://cn.redux.js.org/docs/recipes/UsingImmutableJS.html
- https://www.npmjs.com/package/redux-immutable
- Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象
- Immutable 实现的原理是 Persistent Data Structure （持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变
- 同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗， Immutable 使用了 Structural Sharing···· （结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。

安装

npm install immutable --save

- 方法 obj.set, obj.setIn, obj.get, obj.getIn, obj.update, obj.updateIn

```ecmascript 6
import { Map, List, fromJS, toJs } from 'immutable';
const obj = fromJS({
    name: 'zhang', 
    age: 18, 
    address: {
        city: '深圳',
        region: '西部硅谷'
    },
    hobbies: ['java', 'js', 'css']
});

obj.get('name');
obj.set('name', 'wang');  // 返回新完整对象

obj.getIn(['address', 'city']);
obj.setIn(['address', 'city'], '北京') // 返回完整新对象

obj.get('hobbies');

obj.getIn(['hobbies', 1]) // 返回 js
obj.setIn(['hobbies', 1], 'JAVASCRIPT') // 返回完整新对象
obj.update('hobbies', hobbies => hobbies.push("Node"))
 
```

### redux-immutable 
+ npm install redux-immutable --save
```
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable'

const userInfo = fromJS({
    userName: '张三'
})

function reducerA(state = userInfo, action) {
    return state;
}

const rootReducer=combineReducers({
    moduleA: reducerA
});

const store = createStore(rootReducer, applyMiddleware(thunk))

```

```
const mapStateToProps = (state) => {    
      return  {
          focused:state.getIn(['moduleA','focused'])
          //focused:state.get('moduleA').get('focused')
      }    
}
```