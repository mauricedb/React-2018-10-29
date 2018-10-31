import React, { Component } from 'react';
// import MovieList from './MovieList'

// https://www.npmjs.com/package/react-request
// https://www.npmjs.com/package/restful-react
// https://www.npmjs.com/package/react-async


class Fetch extends Component {
    state = { data: [], loading: false, error: null }

    async componentDidMount() {
        this.setState({ loading: true })

        const rsp = await fetch(this.props.url)
        if (rsp.ok) {
            const data = await rsp.json();
            this.setState({ data, loading: false })
        }
        else {
            this.setState({ error: rsp.statusText, loading: false })
        }
    }

    render() {
        const { data, loading, error } = this.state;
        const { children } = this.props;

        if (loading) return 'Loading....'

        if (error) return <div className="error"> {error}</div>

        return (
            // <MovieList movies={movies} />
            children(data)

        );
    }
}


export default Fetch;