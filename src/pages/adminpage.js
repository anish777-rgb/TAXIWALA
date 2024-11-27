import { Link } from "react-router-dom";
import React from "react";
import './adminpage.css'

function Adminpage() {
    return (
        

           <div className="adminpageback">



           



        
        <div className="container mt-4">
                <h1 className="text-center">Welcome to the Admin Dashboard</h1>

                <div className="row mt-5">
                    {/* Users Card */}
                    <div className="col-md-4">
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-header">Users</div>
                            <div className="card-body">
                                <h5 className="card-title">Manage Users</h5>
                                <p className="card-text">View, edit, and manage all users in the system.</p>
                                <Link to="/loginwatch" className="btn btn-light">Go to Users</Link>
                            </div>
                        </div>
                    </div>

                    {/*BOOKING DETAILS*/}
                    <div className="col-md-4">
                        <div className="card text-white bg-success mb-3">
                            <div className="card-header">Booking Details</div>
                            <div className="card-body">
                                <h5 className="card-title">View Reports</h5>
                                <p className="card-text">Generate and view various system reports.</p>
                                <Link to="/watch" className="btn btn-light">Go to Reports</Link>
                            </div>
                        </div>
                    </div>



                    {/*contact details*/}

                    <div className="col-md-4">
                        <div className="card text-white bg-warning mb-3">
                            <div className="card-header">Contact Details</div>
                            <div className="card-body">
                                <h5 className="card-title">View Reports</h5>
                                <p className="card-text">Generate and view various system reports.</p>
              
                                <Link to="/contactwatch" className="btn btn-light">View Details</Link>
                                </div>
                        </div>
                    </div>




                 
                     



























                </div>








            </div>





        </div>
    )
}

export default Adminpage;