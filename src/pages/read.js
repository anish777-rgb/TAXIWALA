import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './read.css'

function Read() {
  const[data,setData]=useState([])
  const {id}=useParams();
useEffect(()=>{
axios.get('http://localhost:8000/users/'+id)



.then(response=>setData(response.data))
.catch(err=>console.log(err))
})
  return (
    <div className='d-flex w-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
<h1>Detail of User</h1>
<div className='read'>
<div className='mb-2'>
<strong>Name:{data.name}</strong>
</div>
<div className='mb-2'>
<strong>Email:{data.email}</strong>
</div>
<div className='mb-2'>
<strong>Mobile Number:{data.mobilenumber}</strong>
</div>
<div className='mb-2'>
<strong>Pickup City:{data.pickupcity}</strong>
</div>
<div className='mb-2'>
<strong>Pickup Date:{data.pickupdate}</strong>
</div>
<div className='mb-2'>
<strong>Pickup Time:{data.pickuptime}</strong>
</div>
<div className='mb-2'>
<strong>Dropoff Date:{data.dropoffdate}</strong>
</div>
<div className='mb-2'>
<strong>Dropoff Place:{data.dropoffplace}</strong>
</div>
<div className='mb-2'>
<strong>Comments:{data.comments}</strong>
</div>
<div className='mb-2'>
  <strong>Car type:{data.cartype}</strong>
</div>
</div>

<Link  to={`/update/${id}`} className='btn btn-success'> Edit</Link>
<Link  to='/watch' className='btn btn-primary ms-3'> Back</Link>

      </div>
      </div>
  )
}

export default Read;