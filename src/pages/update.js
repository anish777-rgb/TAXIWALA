import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import './update.css'




function Update(){
   
    const[values,setValues]=useState({
      name:"",
      email:'',
     
    })
    const {id}=useParams();
  useEffect(()=>{
  axios.get('http://localhost:8000/users/'+id)
  
  
  .then(response=>{setValues(response.data)})
  .catch(err=>console.log(err))
  })
  const navigate=useNavigate()
  
  const handleUpdate=(()=>{
    axios.put('http://localhost:8000/users/'+id,values)
  .then(response=>{
    console.log(response);
    navigate('/watch')
  })
  .catch(err=>console.log(err))
  })
    return (
      <div className='d-flex w-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update  A User</h1>
        
  <form onSubmit={handleUpdate}>
  <div className='updatetable'>
   
  <div className='mb-2 '>
  <label htmlFor='name'>Name:</label>
  <input type='text' name='name' id='update'   style={{color:"black"}} className='form-control' placeholder='enter name'
  value={values.name}onChange={e=>setValues({...values,name:e.target.value})}
  />
  
  </div>
  <div className='mb-2'>
  <label htmlFor='name'>Email:</label>
  <input type='email' name='email' id='update'  style={{color:"black"}}  className='form-control' placeholder='enter email'
  value={values.email}onChange={e=>setValues({...values,email:e.target.value})}
  />
  
  </div>
  <div className='mb-2'>
  <label htmlFor='name'>mobilenumber:</label>
  <input type='text' name='number' id='update'  style={{color:"black"}} className='form-control' placeholder='enter number'
  value={values.mobilenumber}onChange={e=>setValues({...values,mobilenumber:e.target.value})}
  />
  </div>

<div className='mb-2'>
  <label htmlFor='name'>pick up city:</label>
  <input type='text' name='picupcity' id='update'  style={{color:"black"}} className='form-control' placeholder='enter pick up city'
  value={values.pickupcity}onChange={e=>setValues({...values,pickupcity:e.target.value})}
  />
  </div>

<div className='mb-2'>
  <label htmlFor='name'>pick up date:</label>
  <input type='date' name='picupcity'  id='update'  style={{color:"black"}} className='form-control' placeholder='enter pick up date'
  value={values.pickupdate}onChange={e=>setValues({...values,pickupdate:e.target.value})}
  />
  
  </div>
  
<div className='mb-2'>
  <label htmlFor='name'>pick up time:</label>
  <input type='time' name='picupcity' id='update'  style={{color:"black"}} className='form-control' placeholder='enter pick up time'
  value={values.pickuptime}onChange={e=>setValues({...values,pickuptime:e.target.value})}
  />
  
  </div>

  <div className='mb-2'>
  <label htmlFor='name'>drop off date:</label>
  <input type='date' name='picupcity' id='update'  style={{color:"black"}} className='form-control' placeholder='enter drop off date'
  value={values.dropoffdate}onChange={e=>setValues({...values,dropoffdate:e.target.value})}
  />
  
  </div>
  <div className='mb-2'>
  <label htmlFor='name'>drop off place:</label>
  <input type='text' name='picupcity' id='update'   style={{color:"black"}} className='form-control' placeholder='enter drop off date'
  value={values.dropoffplace}onChange={e=>setValues({...values,dropoffplace:e.target.value})}
  />
  
  </div>
  </div>
  <button className='btn btn-success'>Update</button>
  <Link  to='/watch' className='btn btn-primary ms-3'>Back</Link>
  </form>
      </div>
     
  
    </div>
    
  
        
 )

}


export default Update;