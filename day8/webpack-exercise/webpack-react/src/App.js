import React from 'react';
export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            time: Date().toLocaleString()
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: Date().toLocaleString()
            })
        }, 1000)
    }

    render() {
        return (
            <div style={{border: 'solid 5px red'}}>
                {this.state.time}
                <Welcome name={'张三'} />
            </div>
        );
    }
}

function Welcome(props){
    return (
        <div>
            Hello {props.name}
        </div>
    );
}
