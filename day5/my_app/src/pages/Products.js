import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import axios from 'axios';

class Products extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { product_list, load_products, loadMore } = this.props;

        const lis = product_list.map((product, index) => {
          return (
            <li key={product.id}>
                {product.name}, {product.pic}
                <Link to={ '/product_detail/' + product.id }>详情</Link>
            </li>
          )
        })
        return (
            <div className="page">
            <button onClick={ load_products }>加载 产品数据</button>
            <ul>
            { lis }
            </ul>
            <button onClick={ loadMore }>加载更多</button>
            </div>
        )
    }

    componentDidMount() {
        console.log('组件已经挂载')
    }

    componentWillUnmount() {
        console.log('组件已经卸载')
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

  export default connect(mapState2Props, mapDispatch2Props)(Products)
