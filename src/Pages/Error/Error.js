import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div my-5 py-5>
            <h1 className="mt-5">404</h1>
            <h1 className="text-danger my-5">Oops!</h1>
            <h4>Something is missing</h4>
            <h5>The page you looking for is not found</h5>
            <Link to="/"><button className="mb-5 mt-4 btn btn-primary">Go Back</button></Link>
        </div>
    );
};

export default Error;