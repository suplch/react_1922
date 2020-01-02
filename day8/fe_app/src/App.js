import React from 'react';
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    add = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        const str = sessionStorage.getItem('hello');

        const { count } = this.state;
        return (
            <div>
                { str} 
                <hr/>
                { count }
                <button onClick={ this.add }>加</button>
            </div>

        )
    }
}