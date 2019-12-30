import { fromJS } from 'immutable';
// 返回一个不可变对象
const cart = fromJS({
    items: [
        {id: '111', name: '西瓜', pic: '🍉', count: 1},
    ]
})

export function cartReducer(state = cart, action) {
    switch (action.type) {
        case 'ADD_CART':
            const fruit = action.payload.fruit
            return state.update('items', function(items) {

                const itemIndex = items.findIndex(function(item) {
                    return item.get('id') === fruit.get('id')
                });

                if (itemIndex !== -1) {
                    return items.updateIn([itemIndex, 'count'], function(count){
                        return count + 1
                    })
                } else {
                    return items.push(fromJS({
                        id: fruit.get('id'),
                        name: fruit.get('name'),
                        pic: fruit.get('pic'),
                        count: 1
                    }))
                }
            })
        case 'ADD_ITEM_COUNT':
            const {cartItem, n} = action.payload;
            if (n === -1 && cartItem.get('count') === 1) {
                return state;
            }
            return state.update('items', function(items) {
                const itemIndex = items.indexOf(cartItem);
                return items.updateIn([itemIndex, 'count'], function(count) {
                    return count + n
                })
            })

        default:
            return state;
    }
}