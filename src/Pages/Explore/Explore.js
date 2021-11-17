import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Explore.css';

const Explore = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://tranquil-escarpment-93338.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h2>Explore All items</h2>
            <div className="explore-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Explore;