import 'antd/dist/antd.css';
import zhCN from 'antd/es/locale/zh_CN';

import React from 'react';
import ReactDOM from 'react-dom';

import { ConfigProvider } from 'antd';

import App from './App';

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <App />
    </ConfigProvider>
   , document.getElementById('root')
);
