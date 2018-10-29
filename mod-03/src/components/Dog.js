import React, { Component } from 'react';
import img from './dog.jpg';

class Dog extends Component {
    render() {
        return (
            <div>
                <img src={img} alt="Dog" width="300" />
            </div>
        );
    }
}

export default Dog;