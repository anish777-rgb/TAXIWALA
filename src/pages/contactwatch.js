import React, { useEffect, useState } from "react";
import "./contactwatch.css"
import axios from "axios";
import { Link } from "react-router-dom";






function Contactwatch() {


    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/contact')
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    }, []);




    return (
        <div className="contactwatchback">



            <div className="container">
                <div className="title">
                    <h3 style={{
            textAlign: "center",
            fontSize: "45px",
            fontWeight: "bold",
            color: "red",
            letterSpacing: "2px",
            textTransform: "uppercase",
            textShadow: "2px 2px #ddd"}}>CONTACT DETAILS</h3>
                </div>
                <div className="d-flex justify-content-end">
       <Link to='/adminpage' button type="submit"  style={{marginBottom:"10px",marginRight:"20px"}}className="btn btn-secondary btn-md ">Back</Link>


      </div>

                <div className="table-responsive">
                    <table className="table table-bordered table-secondary">

                        <thead>
                            <tr>

                                <th>NAME</th>
                                <th>PHONE NUMBER</th>
                                <th>EMAIL</th>
                                <th>COMMENTS</th>







                            </tr>







                        </thead>



                        <tbody>

                            {data.map((d, i) => (
                                <tr key={i}>

                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.phonenumber}</td>
                                    <td>{d.comments}</td>

                                </tr>
                            ))}








                        </tbody>








                    </table>




















                </div>

















            </div>

























        </div>

    )
}

export default Contactwatch;