import React, { Component } from 'react';
import img from './cat.jpg';

class Cat extends Component {
    render() {
        return (
            <div>
                <img src={img} alt="Cat" width="300" />
            </div>
        );
    }
}

export default Cat;