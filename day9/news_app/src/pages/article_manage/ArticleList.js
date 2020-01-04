import React from 'react';
import { Table } from 'antd';
import axios from 'axios';

const columns = [
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
    },
]

export class ArticleList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            columns,
        }
    }

    async componentDidMount() {
        const result = await axios.get('/article/list')
        const artile_list = result.data.data;
        console.log(artile_list);
        this.setState({
            dataSource: artile_list
        })
    }

    render() {
        const {columns, dataSource} = this.state;
        return (
            <div>
                网站列表
                <Table 
                    rowKey={ (record) => { return record._id } }
                    pagination={ 
                        {
                            total: 500, 
                            pageSize: 20, 
                            onChange: (page, pageSize) => {
                                console.log(page, pageSize);
                            }
                        } 
                    }
                    columns={columns} 
                    dataSource={dataSource}  />
            </div>
        )
    }
}