import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        // this.state = {}
    }

    async componentDidMount() {
        const { match, load_detail } = this.props;

        load_detail(match.params.pid)
        // const result = await axios.get('/detail?pid=' + match.params.pid);
        // result.data
    }

    render() {
        console.log(this.props);
        const { match, detail } = this.props;

        return (
            <div className="page">
                产品详情 { match.params.pid }
                <hr/>
                { detail.name}, {detail.pic}, {detail.description}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        detail: state.product_detail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        load_detail(pid) {
            dispatch(async function(dispatch, getState) {
                const result = await axios.get('/detail?pid=' + pid);
                dispatch({
                    type: 'SET_DETAIL', 
                    payload: { 
                        product_detail: result.data
                    }
                });
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)

/*
    // 此 伪代码 帮助大家理解 connect 函数
    function connect(mapStateToProps, mapDispatchToProps) {

        let store = fromSomeWhere();
        
        const propsA = mapStateToProps(store.getState())
        const propsB = mapDispatchToProps(store.dispatch)

        const props = {...propsA, ...propsB};

        return function(UserComponent) {
            return function(props) {
                return (
                    <div>
                        <UserComponent {...props} />
                    </div>
                )
            }
        }
    }
*/