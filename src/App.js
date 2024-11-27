
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';


import Home from './pages/home';

import Contactus from './pages/contactus';

import Navbar from './navbar/navbar';

import Booking from './pages/booking';

import Travelblog from './pages/travelblog';

import Cars from './pages/cars';

import Login from './pages/login';

import Register from './pages/register';

import Watch from './pages/watch';
import Update from './pages/update';
import Read from './pages/read';
import Admin from './pages/adminlogin';
import { ToastContainer } from 'react-toastify';
import Adminpage from './pages/adminpage';
import Contactwatch from './pages/contactwatch';
import Loginwatch from './pages/loginwatch';

import 'react-toastify/dist/ReactToastify.css';
import Navbarsecond from './navbar/navbarsecond';





function App() {

  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  return (

    
    <div className="App">
      
      
      {isAdminRoute ? <Navbarsecond /> : <Navbar />}

      <ToastContainer theme='colored' position='top-center'></ToastContainer>

     

      
      
      

     <Routes>

      <Route path='/'element={<Home/>}/>
      
       <Route path='/booking' element={<Booking/>}/>

    

      <Route path='/contactus' element={<Contactus/>}/>

      <Route path='/travelblog' element={<Travelblog/>}/>

      <Route path='/cars' element={<Cars/>}/>

      <Route path='/login' element={<Login/>}/>

      <Route path='/register' element={<Register/>}/>

      <Route path='/watch' element={<Watch/>}/>

      <Route path='/update/:id' element={<Update/>}/>

      <Route path='read/:id' element={<Read/>}/>

      <Route path='/adminlogin' element={<Admin/>}/>

      <Route path='/adminpage' element={<Adminpage/>}/>

      <Route path ='/contactwatch' element={<Contactwatch/>}/>


      <Route path='/loginwatch' element={<Loginwatch/>}/>
      

    

      

    
      



      
     </Routes>




     

    

    
     
    </div>

  
    
  );
}

export default App;
