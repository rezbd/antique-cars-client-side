import React from 'react';

const Review = ({ feedback }) => {
    const { name, occupation, review, rating } = feedback;
    return (
        <div>
            <h3>{name}</h3>
            <h5>{occupation}</h5>
            <p>{review}</p>
            <h6>Rating: {rating}/5</h6>
        </div>
    );
};

export default Review;