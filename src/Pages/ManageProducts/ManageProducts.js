import React, { useEffect, useState } from 'react';
import './ManageProducts.css';

const ManageProducts = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);

    const handleDelete = (id) => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    // window.confirm('Are you sure you want to delete this?');
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }

    return (
        <div>
            <h2>Admin Manage Products</h2>
            <div className="manage-products-container">
                {
                    services.map(service => <div key={service._id}>
                        <div className="manage-products">
                            <h3 className="mb-3">{service.carName}</h3>
                            <h5 className="mb-4">Price: ${service.price}</h5>
                            <button onClick={() => handleDelete(service._id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;