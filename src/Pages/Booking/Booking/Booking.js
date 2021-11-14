import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    console.log(service);

    // place order form code implement
    /*  const {
         register,
         handleSubmit,
         watch,
         formState: { errors },
     } = useForm(); */

    const onSubmit = (data) => {
        console.log(data);
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
                    <h3 className="mb-4">Complete the purchase of {service.carName}</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="purchase-form">
                        <label>Name</label>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <label>Email</label>
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <label>Country</label>
                        <input placeholder="Country" defaultValue="" {...register("country")} />
                        <label>City</label>
                        <input placeholder="City" defaultValue="" {...register("city")} />
                        <label>Street Address</label>
                        <input placeholder="Street Address" defaultValue="" {...register("address")} />
                        <label>Phone Number</label>
                        <input placeholder="phone number" defaultValue="" {...register("phone")} />

                        {errors.exampleRequired && <span>This field is required</span>}

                        {/* <Link to="/booked">
                            <input className="btn btn-warning mt-3 w-50 mx-auto" type="submit" />
                        </Link> */}
                        <input className="btn btn-warning mt-3 mx-auto" type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Booking;