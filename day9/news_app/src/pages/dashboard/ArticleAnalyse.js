import React from 'react';
import axios from 'axios';

export class ArticleAnalyse extends React.Component {

    getUser = async () => {
        const result = await axios.get('/auth/user');
        console.log(result.data);
        if( result.data.code === 100) {

        } else if (result.data.code === 222) {
            alert('请重新登录');
            window.location.hash = '#/login'
        } else {
            alert(result.data.code, result.data.msg);
        }
    }

    render() {
        return (
            <div>
                文章分析
                <button onClick={this.getUser}>获取用户信息</button>
            </div>
        )
    }
}