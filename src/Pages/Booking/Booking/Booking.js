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
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    <div>
                        <img width="100%" src={service.img} alt="" />
                        <h3>{service.carName}</h3>
                        <p>{service.description}</p>
                        <h5>Price: ${service.price}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;