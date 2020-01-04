const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect('mongodb://localhost/article',  { useUnifiedTopology: true, useNewUrlParser: true });

const ArticleSchema = mongoose.Schema({
    title: String,  // 标题
    content: String,   // 内容
    author: String, // 作者
});

const Article = mongoose.model('Article', ArticleSchema);


async function createArticle(articleObj) {
    return await Article.create(articleObj)
}

async function listArticle() {
    return await Article.find().exec()
}

module.exports = {
    createArticle,
    listArticle
}


// Article.create({title: 'aaa', content: 'bbb', author: 'ccc'})

// mongoose.connection.close();