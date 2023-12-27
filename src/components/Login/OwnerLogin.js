import { useState } from "react";
import img from '../../assets/login2.avif';
import { useNavigate } from "react-router-dom";
// import jwt_decode from 'jwt-decode';
import { jwtDecode as jwt_decode, InvalidTokenError } from 'jwt-decode';


export default function OwnerLogin({ setLogged, setUser }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  

  const submitHandler = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://10.40.28.136:4000/api/v1/auth/login/owner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json(); // Await the response.json()
  
        // Handle the response data, which may include the token
        const token = data.token;
  
        // Handle the token (e.g., store it in localStorage)
        // For example:
        localStorage.setItem('token', token);
  
        // If credentials are correct
        const decodedToken = jwt_decode(token);
        const ownerId = decodedToken.userId;
        navigate('/OwnerPage');
        setLogged(true);
        setUser('Owner');
        console.log(decodedToken);
        console.log(ownerId);
  
        
      } else {
        // Handle error response
        console.error('Error in response:', response.status, response.statusText);
      }
    } catch (error) {
      // Handle fetch error
      console.error('Fetch error:', error);
    }
  };

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="">
      <div className="flex flex-row w-8/12 outline-dotted mt-10 p-5 rounded bg-slate-400 bg-opacity-10 mx-auto my-auto">
        <div>
          <div>
            <h1 className="font-bold text-3xl m-10">Welcome Back</h1>
            <p className="text-xl">To keep connected with us login with your personal info</p>
          </div>
          <div className="outline w-96 my-auto mt-10 mb-10 p-5 ">
            <form onSubmit={submitHandler}>
              <label htmlFor="email">
                <p>Email<sup>*</sup></p>
                <input className="outline w-64 mt-5 mb-5 text-left" type="email" name="email" required value={formData.email} onChange={changeHandler} placeholder="Enter Email"></input>
              </label>
              <label htmlFor="password">
                <p>Password<sup>*</sup></p>
                <input className="outline w-64 mt-5" type="password" name="password" required value={formData.password} onChange={changeHandler} placeholder="Enter Password"></input>
              </label>
              <div className="mt-12 outline w-32 bg-blue-600 h-7 text-center rounded-3xl mx-auto my-auto hover:bg-[rgb(58,81,187)] hover:shadow-[rgb(31,32,97)_3px_3px_5px_3px]  ">
                <button className="font-bold">Login</button>
              </div>
            </form>
          </div>
        </div>
        <div className="ml-10 mix-blend-multiply">
          <img src={img} alt="Owner Login" />
        </div>
      </div>
    </div>
  );
}
