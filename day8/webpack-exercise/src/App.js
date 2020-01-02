import React from "react";

import { DatePicker, Button, Radio } from 'antd';


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
            group: 'large'
        };

        setInterval(() => {
            this.setState({
                time: new Date().toLocaleString()
            })
        }, 1000)
    }

    handleSizeChange = (event) => {
        console.log(event)
        this.setState({
            group: event.target.value
        })
    }

    render() {
        return (
            <div>
                {this.state.time}
                <hr/>
                <DatePicker />
                <Button type="primary" onClick={() => {alert('hello')}}>Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger" disabled>Danger</Button>
                <Button type="link">Link</Button>
                <Button type="primary" shape="circle" icon="search" />
                <hr/>

                <Radio.Group value={this.state.group} onChange={this.handleSizeChange}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <div className={this.state.group}>
                    你好  哈哈
                </div>
            </div>
        )
    }
}
