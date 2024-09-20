import React from 'react';

const Rating = ({ rating }) => {
    // Extract the actual rating and the total possible rating (e.g., 4 and 5 from 4/5)
    const [actualRating, totalRating] = rating.split('/').map(Number);

    // Create an array with 5 items representing stars
    const stars = Array(totalRating).fill(0);

    return (
        <div style={{ display: 'flex', gap: '5px' }}>
            {stars.map((_, index) => (
                <span
                    key={index}
                    style={{
                        color: index < actualRating ? 'gold' : 'gray',
                        fontSize: '24px',
                    }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default Rating;
