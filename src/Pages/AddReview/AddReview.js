import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="row">
            <div className="col-12 col-md-4 mx-auto">
                <h2>Please Add a Review</h2>
                <form className="add-review" onSubmit={handleSubmit(onSubmit)}>
                    <h6>Your Name</h6>
                    <input {...register("name", { required: true, maxLength: 40 })} placeholder="Your Name" />
                    <br />
                    <h6>Antique Car Name</h6>
                    <input {...register("carName", { required: true, maxLength: 40 })} placeholder="Car Name" />
                    <br />
                    <h6>Your Feedback</h6>
                    <textarea {...register("feedback")} placeholder="Your Feedback" />
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