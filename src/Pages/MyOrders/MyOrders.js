import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import './MyOrders.css';

const MyOrders = () => {

    const { user } = useAuth();

    const [services, setServices] = useState([]);

    const [control, setControl] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch(`https://tranquil-escarpment-93338.herokuapp.com/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [user, control]);

    const handleDelete = (id) => {
        fetch(`https://tranquil-escarpment-93338.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    // alert('this order is canceled')
                    handleClose();
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
                                {/* <button onClick={() => handleDelete(pd?._id)} className="btn btn-danger">Cancel Order</button> */}
                                <>
                                    <Button variant="danger" onClick={handleShow}>
                                        Cancel Order
                                    </Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Body><h5>Are you sure to cancel the order?</h5></Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" className="mx-4 px-4" onClick={handleClose}>
                                                NO
                                            </Button>
                                            <Button variant="primary" className="px-4" onClick={() => handleDelete(pd?._id)}>
                                                YES
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyOrders;