import React, { Component } from 'react';

class Clock extends Component {
    interval = 0;
    state = {
        now: new Date().toLocaleTimeString()
    }


    // constructor(props){
    //     super(props)

    //     this.state = {}
    // }

    componentDidMount() {
        this.interval = setInterval(() => {

            this.setState({
                now: new Date().toLocaleTimeString()
            })

            // this.state.now = new Date().toLocaleTimeString();
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        console.log('Clock render')

        const { now } = this.state;
        return <div>The time is : {now}</div>
    }
}

export default Clock