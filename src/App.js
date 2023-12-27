
import './App.css';
import { Route,Routes, useSearchParams } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Login from './components/Login/Login';
import Signin from './components/Singin/Signin';
import Features from './components/features/Features'
import OwnerLogin from './components/Login/OwnerLogin';
import RentalLogin from './components/Login/RentalLogin';
import OwnerPage from './components/Booking/OwnerPage'
import BookingPage from './components/BookingPage';
import OwnerSignup from './components/Singin/OwnerSignup';
import RentalSignup from './components/Singin/RenatlSignup'
import { useState } from 'react'

function App() {
  const[logged,setLogged]=useState(false);
  const[user ,setUser]=useState('');
  return (
    <div className="App">
     <Navbar logged={logged} setLogged={setLogged} setUser={setUser}/>
     
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signin/>}/>
      <Route path='/ownerlogin' element={<OwnerLogin setLogged={setLogged} setUser={setUser}/>}/>
      <Route path='/rentallogin' element={<RentalLogin setLogged={setLogged} setUser={setUser}/>}/>
      <Route path='/OwnerPage' element={<OwnerPage/>}/>
      <Route path='/bookingpage' element={<BookingPage/>}/>
      <Route path='/OwnerSignup' element={<OwnerSignup/>}/>
      <Route path='/RentalSignup' element={<RentalSignup/>}/>

     </Routes>
     
    </div>
    
  );
}

export default App;
