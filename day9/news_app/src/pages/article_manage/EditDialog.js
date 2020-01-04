import React from 'react';
import { Input, Layout, Row, Col, Button } from 'antd';
import axios from 'axios';
const { Header, Content, Footer } = Layout;
const { TextArea } = Input;

export class EditDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            artile: props.artile
        }
    }

    async editArticle() {
        console.log(this.state.artile);
        const result = await axios.post('/article/edit', this.state.artile);
        if (result.data.code == 100) {
            console.log('ok')
            this.props.onSaveOk();
        } else {
            console.log('err')
        }
    }


    render() {
        const { artile } = this.state;
        return (
            <Layout>
                <Header style={ { height: '120px', background: 'white'} }>
                    <Row>
                        <Col span={12}>
                            <label>标题: <Input value={artile.title} onChange={ (e)=>{ 
                                this.setState({
                                    artile: {...this.state.artile, title: e.target.value}
                                })
                            } } size="small" /></label>
                        </Col>
                        <Col span={12}>
                            <label>作者: <Input value={artile.author} size="small" /></label>
                        </Col>
                    </Row>
                </Header>
                <Content>
                    <label>内容: <TextArea value={artile.content} /></label>
                </Content>
                <Footer>
                    <Button onClick={ () => { this.editArticle()} }>提交</Button>
                </Footer>
            </Layout>
        )
    }
}