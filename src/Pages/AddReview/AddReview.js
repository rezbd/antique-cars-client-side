import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('successfully added');
                    reset()
                }
            })
    }

    return (
        <div className="row">
            <div className="col-12 col-md-4 mx-auto">
                <h2>Please Add a Review</h2>
                <form className="add-review" onSubmit={handleSubmit(onSubmit)}>
                    <h6>Your Name</h6>
                    <input {...register("name", { required: true, maxLength: 40 })} placeholder="Your Name" />
                    <br />
                    <h6>Your Occupation</h6>
                    <input {...register("occupation", { required: true, maxLength: 40 })} placeholder="Your Occupation" />
                    <br />
                    <h6>Your Review</h6>
                    <textarea {...register("review")} placeholder="Your review" />
                    <br />
                    <h6>Give a Rating (Out of 5)</h6>
                    <input type="number" {...register("rating", { min: 1, max: 5 })} placeholder="Your Rating (1 to 5)" />
                    <br />
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;