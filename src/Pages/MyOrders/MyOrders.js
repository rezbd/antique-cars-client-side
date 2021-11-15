import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {

    const { user } = useAuth();
    // console.log(user);
    // const email = user.email;

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, [user]);

    return (
        <div>
            <h2>My Orders</h2>
            {/* <div className="services">
                <div className="row container">
                    {services?.map((pd) => (
                        <div className="col-md-4">
                            <div className="service border border p-3">
                                <div className="services-img ">
                                    <img className="w-100" src={pd?.image} alt="" />
                                </div>

                                <h6>{pd?.name}</h6>
                                <h4>{pd?.model}</h4>
                                <p>{pd?.description}</p>
                                <h3 className="text-danger"> Cost :{pd?.price}$</h3>

                                <button
                                    onClick={() => handleDelete(pd?._id)}
                                    className="btn btn-danger"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default MyOrders;