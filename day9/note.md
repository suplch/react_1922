### Ant Design UI库
- https://ant.design/index-cn  桌面端
- https://mobile.ant.design/   移动端

## 登录注册
- 登录验证 生成 token
```
// 秘钥
const scrict='sdjfksdjflajflasjflasjflksf'

const jwt = require('jsonwebtoken');

let payload = {username: '张三', age: 18};

let token = jwt.sign(palyload,scrict, { expiresIn: 60 });

let originData = jwt.verify(token,scrict);

console.log(originData);

```

- 将 token 写入 cookie
```
  npm install cookie-parser --save
  const cookieParser = require('cookie-parser');
  app.use(cookieParser())
```
### mongoose
```
const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.connect('mongodb://localhost/news',  { useUnifiedTopology: true, useNewUrlParser: true });

const NewsSchema = mongoose.Schema({
    title: String,  // 新闻标题
    author: Number,   // 作者
    content: Number, // 内容,
    visitRate: Number, // 访问量
    createdTime: Number // 发布时间
});

const News = mongoose.model('News', NewsSchema);

```