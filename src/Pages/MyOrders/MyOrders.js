import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import './MyOrders.css';

const MyOrders = () => {

    const { user } = useAuth();

    const [services, setServices] = useState([]);

    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [user, control]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    alert('this order is canceled')
                    setControl(!control);
                }
            });
    };

    return (
        <section className="container">
            <h2>My Orders</h2>
            <div className="services">
                <div className="row">
                    {services?.map((pd) => (
                        <div key={pd._id} className="col-12 col-md-4">
                            <div className="order-box p-3 m-2">
                                {/* <h6>My Name: {pd?.name}</h6> */}
                                <h4>Ordered Car: {pd?.carName}</h4>
                                <h5 className="my-3">Price: {pd?.price}</h5>
                                <p className="py-2">Shipping Address: {pd?.address}</p>
                                <button onClick={() => handleDelete(pd?._id)} className="btn btn-danger">Cancel Order</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyOrders;