import React, { Component } from 'react';

interface GreeterProps {
    theName: string;
    lastName?: string
}

class Greeter extends Component<GreeterProps> {
    render() {
        return (
            <div>
                Hello    {this.props.theName}
            </div>
        );
    }
}

export default Greeter;