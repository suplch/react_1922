import { fromJS } from 'immutable';
// 创建一个id生成器 闭包函数
function createGenId() {
    let idstr = 1000;
    return function() {
        return idstr++;
    }
}

const genId = createGenId()

// fromJS 包装为 immutable 对象
const goods = fromJS({
    goods_list: [
        {id: '111', name: '西瓜', pic: '🍉'},
        {id: '222', name: '橙子', pic: '🍊'},
    ]
})

export function goodsReducer(state = goods, action) {
    switch (action.type) {
        case 'ADD_FRUIT':
            const fruit = action.payload.fruit;
            fruit.id = genId();
            // 最终返回 state 对应的一个新对象
            return state.update('goods_list', function(goods_list) {
                return goods_list.push(fromJS(fruit))
            })

        default:
            return state;
    }
}