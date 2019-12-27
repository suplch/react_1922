import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppTestRedux extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const {count, multiple, inc, dec, mul, div} = this.props;
        return (
            <div>
                { count},
                <button onClick={ inc }>加</button>
                <button onClick={ dec }>减</button>
                
                <hr/>
                 {multiple }
                 <button onClick={ mul }>乘10</button>
                 <button onClick={ div }>除10</button>
                测试 redux app
            </div>
        )
    }
}
// 将store 里面的state数据 映射为组件的props 属性
function mapStateToProps(state) {
    return {
        count: state.counter,
        multiple: state.multiple
    }
}
// 将 dispatch 调用 映射为 props 函数类型的属性
function mapDispatchToProps(dispatch) {
    return {
        inc: function() {
            dispatch( {type: 'INC'} );
        },
        dec() {
            dispatch( {type: 'DEC'} );
        },
        mul() {
            dispatch( {type: 'Multi'} )
        },
        div() {
            dispatch( {type: 'Div'} )
        }
    }
}
// connect 函数用来生成一个 产生高阶组件的函数, 用来处理 redux 里面的业务数据
const wrapFn = connect(mapStateToProps, mapDispatchToProps);
// wrapFn 产生一个高阶组件
export default wrapFn(AppTestRedux)

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