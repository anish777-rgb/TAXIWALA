import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import "./loginwatch.css"
import { Link } from "react-router-dom";

function Loginwatch() {

    const [data, setData] = useState([]);

    useEffect(() => {


        axios.get('http://localhost:8000/register')
            .then(respose => setData(respose.data))
            .catch(err => console.log(err));
    }, [])


    return (
        <div className="loginwatchback">

            <div className="container">

                <div className="title">
                    <h3 style={{
            textAlign: "center",
            fontSize: "45px",
            fontWeight: "bold",
            color: "red",
            letterSpacing: "2px",
            textTransform: "uppercase",
            textShadow: "2px 2px #ddd"}}>REGISTERED DETAILS</h3>
                </div>
                <div className="d-flex justify-content-end">
       <Link to='/adminpage' button type="submit"  style={{marginBottom:"10px",marginRight:"20px"}}className="btn btn-secondary btn-md ">Back</Link>


      </div>

                <div className="table-responsive">


                    <table className="table table-bordered table-light">


                        <thead>

                            <tr>

                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>PASSWORD</th>




                            </tr>




                        </thead>

                        <tbody>

                          {data.map((d,i)=>(   

                            <tr key={i}>

                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.password}</td>






                            </tr>




                          ))}





                        </tbody>








                    </table>





                </div>






            </div>



        </div>
    )
}

export default Loginwatch;