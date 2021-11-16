import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../../utilities/fakedb';
import './Booking.css';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
            .then(data => reset(data))
    }, [reset, serviceId])

    // codes to submit form data
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('purchase order processed successfully')
                    clearTheCart();
                    reset();
                }
            })
    };

    return (
        <section className="container">
            <div className="row">
                <div className="col-12 col-md-5 mx-auto">
                    <div>
                        <h3>{service.carName}</h3>
                        <img width="100%" src={service.img} alt="" />
                        <p>{service.description}</p>
                        <h5>Price: ${service.price}</h5>
                    </div>
                </div>
                <div className="col-12 col-md-5 mx-auto">
                    <h3 className="mb-4">Purchase {service.carName}</h3>
                    <form className="purchase-form" onSubmit={handleSubmit(onSubmit)}>
                        <label>Your Name</label>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <label>Email</label>
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <label>Car Name</label>
                        <input defaultValue={service.carName} {...register("carName", { required: true })} />
                        <label>Price</label>
                        <input defaultValue={service.price} {...register("price", { required: true })} />
                        <label>Address</label>
                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <label>Phone Number</label>
                        <input placeholder="phone number" defaultValue="" {...register("phone")} />

                        {errors.exampleRequired && <span>This field is required</span>}

                        {/* <Link to="/booked">
                            <input className="btn btn-warning mt-3 w-50 mx-auto" type="submit" />
                        </Link> */}
                        <input className="btn btn-warning mt-2" type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Booking;