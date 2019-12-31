import { observable, action} from 'mobx';
const store = observable({
    timer: 0,
    goods_list: [
        {id: '111', name: '西瓜', pic: '🍉'},
        {id: '222', name: '草莓', pic: '🍓'},
        {id: '333', name: '葡萄', pic: '🍇'},
    ]
})
let id = 1000

store.addGoods = (goods) => {
    goods.id = id++
    store.goods_list.push(goods);
}
store.delGoods = function(goods_id) {
    const goodsIndex = this.goods_list.findIndex(function(goods) {
        return goods.id === goods_id
    })
    this.goods_list.splice(goodsIndex, 1);

}.bind(store)
// data.addGoods = function(goods) {
//     goods.id = id++;
//     this.goods_list.push(goods);
// }.bind(data)

setInterval(function() {
    store.timer++;
}, 1000);

export default store;