import React from 'react';
import errorBoundary from './errorBoundary'
import PropTypes from 'prop-types'

const MovieCard = ({ movie }) => (
    <div className="MovieCard">

        <h4>{movie.title} </h4>
        <img src={movie.image} alt={movie.title} ></img>
        <p className="Overview">
            {movie.overview}
        </p>
        <ul>
            {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
        </ul>
    </div>);


MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        overview: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
}

export default errorBoundary( MovieCard);