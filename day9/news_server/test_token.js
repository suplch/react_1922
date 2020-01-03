const scrict='sdjfksdjflajflasjflasjflksf'

const jwt = require('jsonwebtoken');

let payload = {username: '张三', age: 18};

// 加密 签名
let token = jwt.sign(payload,scrict, { expiresIn: 60 });
console.log(token);

// 解密
let originData = jwt.verify(token,scrict);
console.log(originData);