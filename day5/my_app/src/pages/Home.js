import React, { Component } from 'react';

function Child(props) {
    return (
        <div>
            { props.name }, { props.age}, {props.sex}
        </div>
    )
}

function createFather(Comp) {
    return function(props) {
        return (
            <div>
                { props.job }
                <Comp {...props} />
            </div>
        )
    }
}

function createGrandPa(Comp) {
    return function(props) {
        return (
            <div>
                {props.hobby}
                <Comp {...props} />
            </div>
        )
    }
}

const Father = createFather(Child)
const GrandPa = createGrandPa(Father);


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page">
                主页
                <Child name="小明" age={18} sex="男" />
                <hr/>
                <Father name="大张" age={38} sex="男" job={ '前端工程师'} />
                <hr/>
                <GrandPa name="老张" age={68} sex="男" job={ '后端工程师'} hobby={'广场舞'} />
            </div>
        )
    }
}

export default Home;