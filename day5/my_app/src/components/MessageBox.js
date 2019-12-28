import React from 'react';

export class MessageBox extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);
    }

    render() {
        const {name, age, children, title} = this.props;

        return (
            <div style={  {border: 'solid 5px green'}   }>
                { title }
                消息框
                姓名: { name }, 年龄: { age }
                内容: { children }
            </div>
        )
    }
}