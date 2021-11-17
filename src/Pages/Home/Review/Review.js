import React from 'react';
import './Review.css';

const Review = ({ feedback }) => {
    const { name, occupation, review, rating } = feedback;
    return (
        <div className="review-each">
            <h4>{name}</h4>
            <h6 className="my-3">{occupation}</h6>
            <p className="my-3">{review}</p>
            <h6 className="my-3">Rating: {rating}/5</h6>
        </div>
    );
};

export default Review;