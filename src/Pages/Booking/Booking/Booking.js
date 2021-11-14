import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    const { register, formState: { errors } } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <section>
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
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    <h3 className="mb-4">Complete the purchase of {service.carName}</h3>
                    <form className="purchase-form">
                        <label>Name</label>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <label>Email</label>
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <label>Country</label>
                        <input placeholder="Country" defaultValue="" {...register("city")} />
                        <label>City</label>
                        <input placeholder="City" defaultValue="" {...register("city")} />
                        <label>Street Address</label>
                        <input placeholder="Street Address" defaultValue="" {...register("address")} />
                        <label>Phone Number</label>
                        <input placeholder="phone number" defaultValue="" {...register("phone")} />

                        {/* <Link to="/booked">
                            <input className="btn btn-warning mt-3 w-50 mx-auto" type="submit" />
                        </Link> */}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Booking;