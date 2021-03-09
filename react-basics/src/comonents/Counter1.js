import React from 'react'

class Counter1 extends React.Component {
    render () {
        return (
            <div onClick={this.plus.bind(this)}>counter={this.state.counter}</div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    plus() {
        this.setState(
            prevState => {
                return {
                    counter: prevState.counter + 1
                }
            }
        );
    }
}

export default Counter1;
