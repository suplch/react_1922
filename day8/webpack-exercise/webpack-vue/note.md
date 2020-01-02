### 什么是webpack, webpack存在的目的是什么

### webpackde 安装
mkdir webpack-vue
cd webpack-vue
npm init -y
npm install webpack --save-dev
npm install webpack-cli --save-dev



### webpack 配置vue开发环境

.vue 文件 有三部分组成 template, script, style
<template>
  html code
</template>

<script>
  js code
</script>

<style>
  css code
</style>

2. vue-loader
```
因为浏览器不认识 .vue 文件, 所以我们必须对.vue文件进行加载解析, 所以需要vue-loader
类似的loader还有许多, 比如 html-loader, css-loader, style-loader, babel-loader 等等
```

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

npm install webpack webpack-dev-server vue-loader vue-html-loader css-loader vue-style-loader file-loader babel-loader babel-core babel-preset-env vue-template-compiler --save-dev

