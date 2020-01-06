const crypto = require('crypto');

const hash = crypto.createHash('md5');

hash.update('hello');

console.log(hash.digest('hex'))