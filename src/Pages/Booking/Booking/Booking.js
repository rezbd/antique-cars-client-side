import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div>
            <h2>This is purchase page: {serviceId}</h2>
            <h2>Service Name: {service.carName}</h2>
            <p>Description: {service.description}</p>
            <h6>Price: {service.price}</h6>
            <img src={service.img} alt="" />
        </div>
    );
};

export default Booking;