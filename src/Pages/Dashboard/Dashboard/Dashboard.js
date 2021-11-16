import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import AddReview from '../../AddReview/AddReview';
import AddService from '../../AddService/AddService';
import ManageProducts from '../../ManageProducts/ManageProducts';
import MyOrders from '../../MyOrders/MyOrders';
import Pay from '../../Pay/Pay';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import './Dashboard.css';

const Dashboard = () => {
    const [control, setControl] = useState("");
    // console.log(control);
    const { admin } = useAuth();

    return (
        <div className="dashboard-component">
            <div className="row">
                <div className="dashboard-container col-md-2">
                    {!admin && <div>
                        <h6>DASHBOARD</h6>
                        <li
                            onClick={() => setControl("pay")}
                            className="dashboard-menu"
                        >
                            PAY
                        </li>
                        <li
                            onClick={() => setControl("myOrders")}
                            className="dashboard-menu"
                        >
                            MY ORDERS
                        </li>
                        <li
                            onClick={() => setControl("addReview")}
                            className="dashboard-menu"
                        >
                            ADD REVIEW
                        </li>
                    </div>}
                    {admin && <div>
                        <h6>ADMIN DASHBOARD</h6>
                        <li
                            onClick={() => setControl("addProduct")}
                            className="dashboard-menu"
                        >
                            ADD A PRODUCT
                        </li>
                        <li
                            onClick={() => setControl("makeAdmin")}
                            className="dashboard-menu"
                        >
                            MAKE ADMIN
                        </li>
                        <li
                            onClick={() => setControl("manageProducts")}
                            className="dashboard-menu"
                        >
                            MANAGE PRODUCTS
                        </li>
                        <li
                            onClick={() => setControl("status")}
                            className="dashboard-menu"
                        >
                            MANAGE ALL ORDERS
                        </li>
                    </div>}
                </div>
                <div className="render-container col-md-10">
                    {!admin && <h2 className="admin-title">User Dashboard</h2>}
                    {admin && <h2 className="admin-title">Admin Dashboard</h2>}

                    {control === "addProduct" && <AddService></AddService>}
                    {control === "pay" && <Pay></Pay>}
                    {control === "myOrders" && <MyOrders></MyOrders>}
                    {control === "addReview" && <AddReview></AddReview>}
                    {control === "manageProducts" && <ManageProducts></ManageProducts>}
                    {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}

                </div>
            </div>
        </div>
    );
};

export default Dashboard;