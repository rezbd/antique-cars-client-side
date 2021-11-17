import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://tranquil-escarpment-93338.herokuapp.com/services', data)
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
                <h3 className="mb-2 pb-1">Add an Antique Car</h3>
                <form className="add-product" onSubmit={handleSubmit(onSubmit)}>
                    <h6>Antique Car Name</h6>
                    <input {...register("carName", { required: true, maxLength: 40 })} placeholder="Car Name" />
                    <br />
                    <h6>Description</h6>
                    <textarea {...register("description")} placeholder="Car Description" />
                    <br />
                    <h6>Price</h6>
                    <input type="number" {...register("price")} placeholder="Price" />
                    <br />
                    <h6>Car Image Link</h6>
                    <input {...register("img")} placeholder="Car Image URL" />
                    <br />
                    <input className="btn btn-warning" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;