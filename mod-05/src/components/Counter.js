import React, { Component } from 'react';
import { connect } from 'react-redux'

class Counter extends Component {
    render() {
        const { counter } = this.props;

        return (
            <div>
                The value is {counter}
            </div>
        );
    }

}


function mapStateToProps(state) {
    return {
        counter: state.value
    }
}

export default connect(mapStateToProps)(Counter);