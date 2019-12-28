const express = require('express');

const app = express();

app.get('/hello', function(request, response) {
    response.send({
        code: 100,
        msg: 'Hello World!'
    })
});

app.get('/product_list', function(req, res) {
    res.send({
        product_list: [
            {id: '111', name: '草莓', pic: '🍓'},
            {id: '222', name: '橙子', pic: '🍊'},
        ]
    })
})
app.get('/more_products', function(req, res) {
    res.send({
        product_list: [
            {id: '333', name: '西瓜', pic: '🍉'},
            {id: '444', name: '葡萄', pic: '🍇'},
        ]
    })
})

const db = {
    "111": {id: '111', name: '草莓', pic: '🍓', description: '好吃的草莓'},
    "222": {id: '222', name: '橙子', pic: '🍊', description: '好吃的橘子'},
    "333": {id: '333', name: '西瓜', pic: '🍉', description: '好吃的西瓜'},
    "444": {id: '444', name: '葡萄', pic: '🍇', description: '好吃的葡萄'},

}

app.get('/detail', function(req, res) {
    //  ip:port/detail?pid=111
    res.send(db[req.query.pid])
})


const port = 5000;
app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`http://localhost:${port}`);
})