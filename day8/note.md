### webpack 安装
- npm init -y

- npm install webpack webpack-cli --save-dev
- npm install webpack webpack-cli --global

- webpack --version

- npm install clean-webpack-plugin --save-dev
- npm install css-loader  --save-dev
- npm install file-loader  --save-dev
- npm install html-webpack-plugin  --save-dev
- npm install style-loader  --save-dev
- webpack --config ./你的webpack配置文件

### webpack 配置文件

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',  // 入口文件
    output: {
        path: __dirname + '/dist',          // path 出口路径
        filename: 'main.[hash].bundle.js'   // filename 出口 文件名
    },
    resolve: {
        extensions:['.js', '.png', '.css']
    },
    module: {  // module 指定 加载器规则 rules
        rules: [
            {
                test: /\.css$/g,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.png$/g,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({  // 指定 html 模板
            path: './dist',
            template: "./src/index.template.html"  
        })
    ]
};

```
### Webpack 打包 处理 React JSX 语法
- 安装 babel 模块 
```
babel-core 
babel-loader 
babel-plugin-transform-runtime
babel-preset-env 
babel-preset-stage-0
babel-preset-react
```
- 添加 .babelrc 文件
```
{
  "presets": ["env", "stage-0", "react"],
  "plugins": ["transform-runtime"]
}
```
- 添加babel-loader配置项
```ecmascript 6
module: { //要打包的第三方模块
    //...
    rules: [
        //...
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
        //...
    ]
    //...
}
```

### Webpack 打包 处理 vue 文件

- .vue 文件 有三部分组成 template, script, style
```vue
<template>
  <div>模板</div>
</template>

<script>
  export default {}
</script>

<style>
  .css{}
</style>
```

- vue-loader
```
因为浏览器不认识 .vue 文件, 所以我们必须对.vue文件进行加载解析, 所以需要vue-loader
类似的loader还有许多, 比如 html-loader, css-loader, style-loader, babel-loader 等等
```
```bash
npm install vue --save

npm install webpack --save-dev
npm install webpack-dev-server --save-dev

npm install vue-loader --save-dev
npm install vue-html-loader --save-dev
npm install css-loader --save-dev
npm install style-loader --save-dev
npm install vue-style-loader --save-dev
npm install file-loader --save-dev

npm install babel-loader --save-dev
npm install babel-core --save-dev
npm install babel-preset-env --save-dev  // 根据配置的运行环境自动启用需要的babel插件
npm install vue-template-compiler --save-dev   // 预编译模板

或者一次性安装
npm install webpack webpack-dev-server vue-loader vue-html-loader css-loader vue-style-loader file-loader babel-loader babel-core babel-preset-env vue-template-compiler --save-dev

```

```ecmascript 6
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    //...
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        //...
        new VueLoaderPlugin()
        //...
    ]
}

```

### 混合开发
- Hybrid 开发介绍与意义
- WebApp，NativeApp，HybridApp 的对比
- Hybrid 开发的两种主导方向
    + Native 主导
    + H5 主导
- Native 与 JS 的交互方式 (webview)

- H5 主导混合开发的方式
    + h5 完成大部分业务逻辑, 特殊的原生API 有 ios 或 android提供 ( 例如: 硬件功能 )
- Dcloud、Apicloud 等同类产品的开发方式
- H5+plus API http://www.html5plus.org/doc/h5p.html
- 利用 H5+plus 调用设备原生功能及操作 webview
    + 获取当前设备的加速度信息
    + 监听设备加速度变化信息
    + 录音
    + 播放录音
    + 扫码 ...
- 利用 Dcloud 产品将 vue 项目改造成 Hybrid 应用
