// import { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ logged, setLogged,user,setUser }) {
  const location = useLocation();
// const [userType,setUsertype]=useState("");
  return (
    <div className='flex flex-row bg-[rgb(58,81,187)] text-white font-bold p-6 text-lg'>
      <div className='ml-20'>
        <img src={logo} width={140} height={20} loading='lazy' alt='Logo' />
      </div>
      <div className='flex flex-row gap-20 mt-2'>
        <Link to='/' className={`ml-96 ${location.pathname === '/' ? 'underline' : ''}`}>
          Home
        </Link>
        <Link to='/about' className={`${location.pathname === '/about' ? 'underline' : ''}`}>
          About
        </Link>
        <Link to='/features' className={`${location.pathname === '/features' ? 'underline' : ''}`}>
          Features
        </Link>
        {logged && user==="Owner"&& (
          <Link to='/OwnerLogin'>
            OwnerPage
          </Link>
        )}
      </div>
      <div className='flex flex-row gap-10 ml-96 mt-2'>
        {!logged && (
          <Link to='/login' >
            <button className={`${location.pathname === '/login' ? 'underline' : ''}`}>Login</button>
          </Link>
        )}

        {!logged && (
          <Link to='/signup' >
            <button className={`${location.pathname === '/signup' ? 'underline' : ''}`}>Signup</button>
          </Link>
        )}

        {logged &&  (
          <Link to='/' onClick={() => setLogged(false)}>
            <button>LogOut</button>
          </Link>
        )}



        
      </div>
    </div>
  );
}

export default Navbar;
