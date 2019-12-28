import React, { Component } from 'react';

import { MessageBox} from '../components/MessageBox';

class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page">
                关于
                <MessageBox name="张三" age={18} title={ <button>关闭</button> }>
                    <ul>
                        <li>java</li>
                        <li>node</li>
                    </ul>
                </MessageBox>
            </div>
        )
    }
}

export default About;