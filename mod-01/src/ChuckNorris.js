import React, { Component } from 'react'


class ChuckNorris extends Component {

    state = {
        jokes: []
    }

    // componentDidMount() {

    //     fetch('http://api.icndb.com/jokes/random/10?escape=javascript')
    //         .then(rsp => rsp.json())
    //         .then(data => this.setState({ jokes: data.value }))
    // }

    async componentDidMount() {

        try {
            const rsp = await fetch('http://api.icndb.com/jokes/random/10?escape=javascript')
            if (rsp.ok) {
                const data = await rsp.json()
                this.setState({ jokes: data.value })
            }
        } catch (e) {
            console.error(e)
        }
    }

    render() {
        const { jokes } = this.state;

        return <ul>

            {jokes.map(joke =>
                <li key={joke.id}>{joke.joke}</li>
            )}

        </ul>

    }
}


export default ChuckNorris;