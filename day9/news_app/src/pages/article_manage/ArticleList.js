import React from 'react';
import { Table, Button, Modal, Input, Layout, Row, Col } from 'antd';
import axios from 'axios';

import { EditDialog } from './EditDialog';

const { Header, Content } = Layout;
const ButtonGroup = Button.Group;
const { TextArea } = Input;

export class ArticleList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            columns: this.columns,
            total: 0,
            modalVisible: false,
            currentArticle: null
        }
    }

    columns = [
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
        {
            title: '操作',
            dataIndex: 'opt',
            key: 'opt',
            render: (text, record, index) => {
                console.log({text, record, index})
                return (
                    <ButtonGroup>
                        <Button size='small' onClick={ () => { this.showArticle(record)} }>查看</Button>
                        <Button size='small' onClick={ () => { this.editArticle(record) } } type='primary'>编辑</Button>
                        <Button size='small' type='danger'>删除</Button>
                    </ButtonGroup>
                )
            }
        },
    ]

    showArticle = (record) => {
        console.log(record)
        // this.setState({
        //     currentArticle: record,
        //     modalVisible: true
        // })

        Modal.info({
            title: record.title,
            content: (
                <div dangerouslySetInnerHTML={ { __html: record.content } } style={ {border: 'solid 5px red', width: '100%', height: '300px', overflow: 'auto'} } />
            )
        })
    }

    editArticle(record) {
        const dialog = Modal.confirm({
            title: '修改数据',
            width: 800,
            content: (
                <EditDialog onSaveOk={ () => { dialog.destroy() } } artile={record} />
            ),
            onOk() {

            }
        });

        
    }

    getArtile_List = async (pageno, pagesize) => {
        this.setState({loading: true})
        const result = await axios.get('/article/list', {
            params: {
                pageno: pageno,
                pagesize: pagesize
            }
        })
        this.setState({loading: false})
        const artile_list = result.data.data.list;
        const total = result.data.data.total;

        console.log(artile_list);
        this.setState({
            dataSource: artile_list,
            total
        })
    }

    closeModal = () => {
        this.setState({
            modalVisible: false
        })
    }

    async componentDidMount() {
        await this.getArtile_List(1, 2)
    }

    render() {
        const {columns, dataSource, loading, total, modalVisible, currentArticle } = this.state;
        return (
            <div>
                网站列表
                <Table 
                    rowKey={ (record) => { return record._id } }
                    pagination={ 
                        {
                            total: total, 
                            pageSize: 2, 
                            onChange: async (page, pageSize) => {
                                console.log(page, pageSize);
                                await this.getArtile_List(page, pageSize)
                            }
                        } 
                    }
                    loading={loading}
                    columns={columns} 
                    dataSource={dataSource}  />

                    {/* <Modal visible={modalVisible} onOk={this.closeModal} onCancel={this.closeModal}>
                        <p>{currentArticle && currentArticle.title}</p>
                        <div style={ {width: '100%', height: '300px', overflow: 'auto'} }>
                            <p>{currentArticle && currentArticle.content}</p>
                        </div>
                        
                        <p>{currentArticle && currentArticle.author}</p>
                    </Modal> */}


            </div>
        )
    }
}