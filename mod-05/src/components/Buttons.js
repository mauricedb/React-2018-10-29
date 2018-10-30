import React, { Component } from 'react';
import { connect } from 'react-redux'

import { createIncrement, createDecrement } from '../store/actions'

class Buttons extends Component {
    onDecrementClick = () => {
        this.props.decrement(3)
    }

    onIncrementClick = () => {
        this.props.increment(5)
    }

    render() {
        return (
            <div>
                <button onClick={this.onDecrementClick}>Decrement</button>
                <button onClick={this.onIncrementClick}>Increment</button>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        increment: function (value) {
            dispatch(createIncrement(value))
        },
        decrement: function (value) {
            dispatch(createDecrement(value))
        }
    }
}

export default connect(null, mapDispatchToProps)(Buttons);