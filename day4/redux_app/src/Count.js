
import React from 'react';
import store from './store';

export class Count extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        store.subscribe(() => {
            console.log(store.getState())

            this.setState({
                count: store.getState()
            })
        });
    }

    addCount = () => {
        store.dispatch({ type: 'INC'});
    }

    decCount = () => {
        store.dispatch({ type: 'DEC'});
    }

    render() {
        return (
            <div>
                { this.state.count } 
                <button onClick={ this.addCount }>+</button>
                <button onClick={ this.decCount }>-</button>
                
            </div>
        )
    }
}

//export default Count;
