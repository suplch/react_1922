import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { product_list, load_products, loadMore } = this.props;

    const lis = product_list.map((product, index) => {
      return <li key={index}>{product.name}, {product.pic}</li>
    })

    return (
      <div>
        <button onClick={ load_products }>加载 产品数据</button>
        <ul>
          { lis }
        </ul>
        <button onClick={ loadMore }>加载更多</button>
      </div>
    )
  }
}

function mapState2Props(state) {
  return {
    product_list: state.product_list
  }
}

function mapDispatch2Props(dispatch) {
  return {
    load_products() {
      // dispatch({ type: ''})
      dispatch(async function(dispatch, getState) {
        const result = await axios.get('/product_list');
        dispatch({
           type: 'LOAD_PRODUCTS', 
           payload: {
             product_list: result.data.product_list
            }
          }
        )
      })
    },
    loadMore() {
      dispatch(async function(dispatch, getState) {
        const result = await axios.get('/more_products');
        dispatch({
          type: 'LOAD_MORE_PRODUCT',
          payload: {
            product_list: result.data.product_list
          }
        })
      });
    }
  }
}

export default connect(mapState2Props, mapDispatch2Props)(App)



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