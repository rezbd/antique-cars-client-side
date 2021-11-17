import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://tranquil-escarpment-93338.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="container featured-cars">
            <h2 className="mb-4">Featured Antique Cars</h2>
            <div className="services-container">
                {
                    services.slice(0, 6).map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;