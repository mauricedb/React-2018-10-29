import React from 'react';

class Greetings extends React.Component {

    componentDidMount() {
        console.log('Greeting has just mounted')
    }

    componentDidUpdate(prevProps) {
        const { firstName, lastName } = this.props;

    }

    changeName = () => {
        this.props.changeFirstName('Jack')
    }

    render() {
        const { firstName, lastName } = this.props;

        return <div>Hello {firstName || 'stranger'} {lastName}

            <button onClick={this.changeName}>Change name</button>
            <br></br>

            <input type='text' value={firstName} onChange={e => this.props.changeFirstName(e.target.value)} />
        </div>
    }
}


export default Greetings
