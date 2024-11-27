import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './watch.css'

import axios from "axios";
import { Link,  useNavigate } from "react-router-dom";

function Watch() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  



  
  useEffect(() => {
    axios.get('http://localhost:8000/users')
      .then(response => setData(response.data))
      .catch(err => console.log(err));
  }, []);
  
  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete this data?");
    if (confirm) {
      axios.delete('http://localhost:8000/users/' + id)
        .then(res => {
          navigate('/watch');
        }).catch(err => console.log(err));
    }
  };

  const handleApprove = (id) => {
    const updatedData = data.map(item => {
      if (item.id === id) {
        return { ...item, status: "approved" };
      }
      return item;
    });
  
    axios.patch(`http://localhost:8000/users/${id}`, { status: "approved" })
      .then(res => {
        setData(updatedData);
      })
      .catch(err => console.log(err));
  };

  
  return (
    <div>

    <div className="watchback">
    <div className="container" id="watchcontainer">
      <div className="text-center my-4" >
     <h3 style={{
            textAlign: "center",
            fontSize: "45px",
            fontWeight: "bold",
            color: "red",
            letterSpacing: "2px",
            textTransform: "uppercase",
            textShadow: "2px 2px #ddd",
            textDecoration:"underline"}}>BOOKING DETAILS</h3>
            
     
      </div>
      </div>
      <div className="d-flex justify-content-end">
       <Link to='/adminpage' button type="submit"  style={{marginBottom:"10px",marginRight:"20px"}}className="btn btn-secondary btn-md ">Back</Link>


      </div>
      <div className="container-fluid">
        <div className="row">
        <div className="col-12-lg">
      <div className="table-responsive">
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>MOBILE NUMBER</th>
              <th>PICK UP CITY</th>
              <th>PICK UP DATE</th>
              <th>PICK UP TIME</th>
              <th>DROP OFF DATE</th>
              <th>DROP OFF PLACE</th>
              <th>CAR TYPE</th>
              <th>COMMENTS</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.mobilenumber}</td>
                <td>{d.pickupcity}</td>
                <td>{d.pickupdate}</td>
                <td>{d.pickuptime}</td>
                <td>{d.dropoffdate}</td>
                <td>{d.dropoffplace}</td>
                <td>{d.cartype}</td>
                <td>{d.comments}</td>
                <td>{d.status || "waiting"}</td>
                <td>
                  <button onClick={() => handleDelete(d.id)} className="btn btn-danger btn-sm mb-1" style={{ width: "100px" }}>Delete</button><br />
                  <Link to={`/update/${d.id}`} className="btn btn-success btn-sm mb-1" style={{ width: "100px" }}>Edit</Link><br />
                  <button onClick={() => handleApprove(d.id)}  className="btn btn-warning btn-sm mb-1" style={{ width: "100px" }}>Approve</button>
                  <Link to={`/read/${d.id}`}    className="btn btn-warning btn-sm mb-1" style={{ width: "100px" }}>REAd</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </div> 
    </div>
    </div>
    </div>
  );
}

export default Watch;
