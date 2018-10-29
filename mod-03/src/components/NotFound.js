import React, { Component } from 'react';
import img from './404.jpg';

class NotFound extends Component {
    render() {
        return (
            <div>
                <img src={img} alt="Oops" width="300" />
            </div>
        );
    }
}

export default NotFound;