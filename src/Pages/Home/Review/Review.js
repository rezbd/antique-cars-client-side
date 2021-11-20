import React from 'react';
import Rating from 'react-rating';
import './Review.css';

const Review = ({ feedback }) => {
    const { name, occupation, review, rating } = feedback;
    return (
        <div className="review-each">
            <h4>{name}</h4>
            <h6 className="my-3">{occupation}</h6>
            <p className="my-2">{review}</p>
            {/* <h6 className="my-3">Rating: {rating}/5</h6> */}
            <Rating
                readonly
                initialRating={rating}
                emptySymbol="far fa-star star-color"
                fullSymbol="fas fa-star star-color"
                className="my-3"
            ></Rating>
        </div>
    );
};

export default Review;