import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { carName, description, price, img, _id } = service;
    return (
        <div className="car-each">
            <img className="car-img" width="100%" src={img} alt="" />
            <h3 className="py-2">{carName}</h3>
            <p className="py-2">{description}</p>
            <h5 className="mb-3 pb-2">Price: ${price}</h5>
            <Link to={`/booking/${_id}`} >
                <button className="btn btn-warning">Purchase</button>
            </Link>
        </div >
    );
};

export default Service;