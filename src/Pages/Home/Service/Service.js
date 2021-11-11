import React from 'react';

const Service = ({ service }) => {
    const { name, description, price, img, _id } = service;
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <h4>Price: ${price}</h4>
        </div>
    );
};

export default Service;