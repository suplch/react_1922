import React from 'react';
import axios from 'axios';
import { Form, Icon, Input, Button } from 'antd';

const { TextArea } = Input;

class NewArticle extends React.Component {

    handleSubmit = (event) => {
        alert('开始提交');
        event.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let result = await axios.post('/article/create', {
                    ...values
                });

                console.log(result.data);
                if (result.data.code === 100) {
                    alert('文章发布成功');
                }
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    {
                        getFieldDecorator('title', {
                            rules: [{ required: true, message: '请输入标题' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="标题"
                            />,
                        )
                    }
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('content', {
                        rules: [{ required: true, message: '请输入文章内容!' }],
                    })(
                        <TextArea rows={4} />
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('author', {
                        rules: [{ required: true, message: '请输入作者名称' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        
                        placeholder="作者名称"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        提 交
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Form.create({ name: 'new_article' })(NewArticle)