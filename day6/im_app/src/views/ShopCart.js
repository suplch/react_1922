import React from 'react';
import { connect } from 'react-redux';

class ShopCart extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { cartItems, addCount } = this.props;
        
        const lis = cartItems.map((item) => {
            return (
                <li key={item.get('id')}>
                    {item.get('name')}, {item.get('pic')}, 
                    <button onClick={ () => { addCount(item, -1) } }>-</button>
                    {item.get('count')}
                    <button onClick={ () => { addCount(item, 1) } }>+</button>
                </li>
            )
        });
        return (
            <div style={  {border: 'solid 5px green'} }>
                购物车
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        cartItems: state.getIn(['cart','items'])
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addCount(cartItem, n) {
            dispatch({
                type: 'ADD_ITEM_COUNT',
                payload: {
                    cartItem,
                    n
                }
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopCart)