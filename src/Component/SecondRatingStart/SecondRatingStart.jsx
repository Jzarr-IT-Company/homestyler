import React from 'react';

function SecondRatingStart({ rating }) {
    let actualRating = 0;
    let totalRating = 5; // Default total rating is set to 5

    // Check if rating is provided as a string and contains '/'
    if (typeof rating === 'string' && rating.includes('/')) {
        [actualRating, totalRating] = rating.split('/').map(Number);
    } 
    // Check if rating is a number (e.g., 4.5)
    else if (typeof rating === 'number') {
        actualRating = rating;
    } 
    // If rating is not valid, return an empty div
    else {
        console.error("Invalid rating format");
        return <div>Invalid rating</div>;
    }

    const stars = Array(totalRating).fill(0);

    return (
        <div style={{ display: 'flex', gap: '5px' }}>
            {stars.map((_, index) => {
                const starType =
                    actualRating >= index + 1
                        ? 'full'
                        : actualRating >= index + 0.5
                        ? 'half'
                        : 'empty';

                return (
                    <span
                        key={index}
                        style={{
                            color: starType === 'full' ? 'gold' : starType === 'half' ? 'gold' : 'gray',
                            fontSize: '24px',
                            position: 'relative',
                        }}
                    >
                        {starType === 'half' ? (
                            <>
                                <span style={{ position: 'absolute', clipPath: 'inset(0 50% 0 0)' }}>★</span>
                                <span style={{ color: 'gray' }}>★</span>
                            </>
                        ) : (
                            '★'
                        )}
                    </span>
                );
            })}
        </div>
    );
}

export default SecondRatingStart;
