import React, { PureComponent } from 'react';
import './MovieList.css'
import MovieCard from './MovieCard'

// import errorBoundary from './errorBoundary'
// const WrappedCard = errorBoundary(MovieCard)

class MovieList extends PureComponent {
    static displayName = 'MovieList'

    render() {

        console.count('render MovieList')

        const { movies } = this.props

        return (
            <div>
                <h1>Movies</h1>
                <div className="MovieList">
                    {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                </div>
            </div>
        );
    }
}

export default MovieList;