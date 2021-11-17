import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://tranquil-escarpment-93338.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div className="row">
            <div className="col-12 col-md-4 mx-auto">
                <h2>Make an Admin</h2>
                <form onSubmit={handleAdminSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            label="Email"
                            onBlur={handleOnBlur}
                            className="form-control"
                            placeholder="enter email" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Make Admin</button>
                </form>
                {success && <div className="alert alert-success" role="alert">
                    Admin is made successfully!
                </div>}
            </div>
        </div>
    );
};

export default MakeAdmin;