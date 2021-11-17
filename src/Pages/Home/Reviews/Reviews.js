import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://tranquil-escarpment-93338.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className="container">
            <h2>User Reviews</h2>
            <div className="reviews-container">
                {
                    reviews.map(feedback => <Review
                        key={feedback._id}
                        feedback={feedback}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;