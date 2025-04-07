import React from "react";


const RatingStars = ({ rating }) => {
    const numericRating = Number(rating); // Convert to number

    const fullStars = Math.floor(numericRating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={i} className="icon ion-ios-star ratings_stars rating_current"></i>);
    }

    if (hasHalfStar) {
        stars.push(
            <i key="half" className="icon ion-ios-star-half ratings_stars rating_current_half"></i>
        );
    }

    while (stars.length < 5) {
        stars.push(
            <i
                key={`empty-${stars.length}`}
                className="icon ion-ios-star-outline ratings_stars"
            ></i>
        );
    }

    return (
        <div className="post-total-rating allow_vote">
            {stars}
            <span className="score font-meta total_votes">{numericRating.toFixed(1)}</span>
        </div>
    );
};

export default RatingStars;