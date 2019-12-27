import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppTestRedux extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const {
            count, multiple, goods_list, cart_items, inc, dec, mul, div, addToCart
        } = this.props;

        const lis = goods_list.map((goods) => {
            return (
                <li key={goods.id}>
                    { goods.name }, {goods.price}, {goods.pic }
                    <button onClick={ () => { addToCart(goods) } }>添加都购物车</button>    
                </li>
            )
        });

        const cartli = cart_items.map((item) => {
        return <li key={item.id}>{ item.name }, {item.price}, {item.pic }, {item.count}</li>
        })

        return (
            <div>
                { count},
                <button onClick={ inc }>加</button>
                <button onClick={ dec }>减</button>
                
                <hr/>
                 {multiple }
                 <button onClick={ mul }>乘10</button>
                 <button onClick={ div }>除10</button>
                测试 redux app
                <hr/>
                商品列表
                <input /> <button>添加商品</button>
                <ul>
                    { lis } 
                </ul>

                购物车
                <ul>
                    { cartli }
                </ul>
            </div>
        )
    }
}
// 将store 里面的state数据 映射为组件的props 属性
function mapStateToProps(state) {
    return {
        count: state.counter,
        multiple: state.multiple,
        goods_list: state.goods,
        cart_items: state.cart
    }
}
// 将 dispatch 调用 映射为 props 函数类型的属性
function mapDispatchToProps(dispatch) {
    return {
        inc: function() {
            dispatch( {type: 'INC'} );
        },
        dec() {
            dispatch( {type: 'DEC'} );
        },
        mul() {
            dispatch( {type: 'Multi'} )
        },
        div() {
            dispatch( {type: 'Div'} )
        },
        addToCart(goods) {
            dispatch( {type: 'ADD_TO_CART', payload: { goods } } )
        }
    }
}
// connect 函数用来生成一个 产生高阶组件的函数, 用来处理 redux 里面的业务数据
const wrapFn = connect(mapStateToProps, mapDispatchToProps);
// wrapFn 产生一个高阶组件
export default wrapFn(AppTestRedux)

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