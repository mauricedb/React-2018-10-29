import React from 'react';
import './ErrorCard.css'

const ErrorCard = ({ error }) => {
    return (
        <div className="ErrorCard">
            <h4>{error.message}</h4>
            <pre>
                {error.stack}
            </pre>
        </div>);
};

export default ErrorCard;