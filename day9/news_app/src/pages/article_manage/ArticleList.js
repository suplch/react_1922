import React from 'react';
import { connect } from 'react-redux';
import { Table, Button, Modal, Input, Layout, Row, Col } from 'antd';
import axios from 'axios';

import { EditDialog } from './EditDialog';

const { Header, Content } = Layout;
const ButtonGroup = Button.Group;
const { TextArea } = Input;

class ArticleList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            columns: this.columns,
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

    closeModal = () => {
        this.setState({
            modalVisible: false
        })
    }

    async componentDidMount() {
        const { load_article } = this.props;
        this.setState({
            loading: true
        })
        await load_article(1, 2);
        this.setState({
            loading: false
        })
    }

    render() {
        const {columns, loading } = this.state;
        console.log(this.props);
        const { article_list, load_article, total } = this.props;

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
                                this.setState({
                                    loading: true
                                })
                                await load_article(page, pageSize)
                                this.setState({
                                    loading: false
                                })
                            }
                        } 
                    }
                    loading={loading}
                    columns={columns} 
                    dataSource={ article_list }  />

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

function mapStateToProps(state) {
    console.log('state-----', state)
    return {
        article_list: state.article.dataSource,
        total: state.article.total
    }
}

function mapDispatchToProps(dispatch) {
    return {
        load_article(pageno, pagesize) {
            return dispatch(async function(dispatch) {

                const result = await axios.get('/article/list', {
                    params: {
                        pageno: pageno,
                        pagesize: pagesize
                    }
                })
                console.log(result.data)
                const article_list = result.data.data.list;
                const total = result.data.data.total;
                dispatch({ 
                    type: 'SET_DATASOURCE', 
                    payload: {
                        article_list,
                        total
                    } 
                })
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)