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
            {name: '草莓', pic: '🍓'},
            {name: '橙子', pic: '🍊'},
        ]
    })
})
app.get('/more_products', function(req, res) {
    res.send({
        product_list: [
            {name: '西瓜', pic: '🍉'},
            {name: '葡萄', pic: '🍇'},
        ]
    })
})


const port = 5000;
app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`http://localhost:${port}`);
})