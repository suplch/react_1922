import React from 'react';

import { connect } from 'react-redux';

class GoodsList extends React.Component {
    constructor(props) {
        super(props);
        this.fruitNameRef = React.createRef();
        this.fruitPicRef = React.createRef();
        
    }

    addFruitObj = () => {
        const {addFruit } = this.props;

        addFruit({
            name: this.fruitNameRef.current.value,
            pic: this.fruitPicRef.current.value
        })
    }

    render() {
        console.log(this.props);
        const { goods_list, addFruit, addToCart } = this.props;

        const lis = goods_list.map((goods) => {
            return (
                <li key={goods.get('id')}>
                    { goods.get('name')}, {goods.get('pic')}
                    <button onClick={ () => { addToCart(goods) }}>添加到购物车</button>
                </li>
            )
        });
        return (
            <div style={  {border: 'solid 5px red'}   }>
                商品列表<br/>
                名字: <input ref={this.fruitNameRef} /><br/>
                图片: <input ref={this.fruitPicRef} /><br/>
                <button onClick={ ()=> { this.addFruitObj() } }>添加水果</button>
                <ul>
                    { lis }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state', state)
    return {
        goods_list: state.getIn(['goods', 'goods_list'])
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addFruit(fruit) {
            dispatch( { 
                type: 'ADD_FRUIT', 
                payload: {
                    fruit
                }
            } )
        },
        addToCart(fruit) {
            dispatch({
                type: 'ADD_CART',
                payload: {
                    fruit
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList)