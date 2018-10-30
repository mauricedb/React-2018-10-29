import React, { Component } from 'react';

class Buttons extends Component {
    onDecrementClick = () => {

    }
    
    onIncrementClick = () => {

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

export default Buttons;