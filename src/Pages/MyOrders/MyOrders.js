import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {

    const { user } = useAuth();

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [user]);

    return (
        <div>
            <h2>My Orders</h2>
            <div className="services">
                <div className="row container">
                    {services?.map((pd) => (
                        <div key={pd._id} className="col-12 col-md-4">
                            <div className="border border-3 p-3">
                                <h6>My Name: {pd?.name}</h6>
                                <h4>Selected Car: {pd?.carName}</h4>
                                <p>Shipping Address: {pd?.address}</p>
                                <button className="btn btn-danger">Cancel Order</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;