import React, { useState } from 'react';

function OwnerSignup(){
  const [formData, setFormData] = useState({
    fullName: '',
    email:"",
    // dob:"",
    gender:'',
    address: '',
    vehicle:"",
    vehicleType:"",
    password: '',
    contactNumber: '',
  });
  const[vehicleType,setvehicleType]=useState('');


  // function handleRadio(e){
  //   setvehicleType(e.target.value);
    
  // }

  function handleRadio(e) {
    setvehicleType((prevType) => {
      return e.target.value;
    });
  }
  

  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your logic to handle the form data (e.g., submit to a server, update state, etc.)
  //   console.log('Form Data:', formData);
  // };

  const  handleSubmit = async(e) => {
    e.preventDefault();
    // Add your logic to handle the form data (e.g., submit to a server, update state, etc.)
    console.log('Form Data:', formData);

    try {
          // console.log('Form Data:', formData);
          const response = await fetch('http://10.40.28.136:4000/api/v1/auth/signup/tenant', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
          } else {
            console.error('Submission failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
   
    
  };

  return (
    <div className='bg-[rgb(226,229,229)] p-10'>
      <div className='w-[600px] bg-white mx-auto rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] '>
      <form onSubmit={handleSubmit} className='flex flex-col'>
      <label className=' p-3 font-bold '>
        <p>Full Name:</p>
        <input className='border w-96 p-1 rounded-xl '
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
          placeholder='Enter Full Name'
        />
      </label>
      {/* <label className=' p-3 font-bold '>
        <p>Date of Birth:</p>
        <input className='border w-96 p-1 rounded-xl'
          type='date'
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          required
          placeholder='Enter Date of Birth'
        />
      </label> */}
      <label htmlFor="mySelect" className=' p-3 font-bold '>Gender:</label>
      <select className='border w-96  mx-auto' name='gender'  id="mySelect" value={formData.gender} onChange={handleInputChange}>
        <option value="">Select...</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Other">Prefer not to say</option>
      </select>
      <label className=' p-3 font-bold '>
        <p>Email:</p>
        <input className='border w-96 p-1 rounded-xl'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          placeholder='Enter Your Email'
        />
      </label>
      
      <label className=' p-3 font-bold'>
       <p> Mobile Number:</p>
        <input className='border w-96 p-1 rounded-xl'
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleInputChange}
          required
          placeholder='Enter Contact Number'
        />
      </label>

      <label className=' p-3 font-bold '>
        <p>Address:</p>
        <input className='border w-96 p-1 rounded-xl'
        type='text'
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
          placeholder='Enter Address'
        />
      </label>
      <p className='font-bold'>Select your vehicle type:</p>

      <label htmlFor="mySelect" className=' p-3 font-bold '>Vehicle Type:</label>
      <select className='border w-96  mx-auto' name='vehicleType'  id="mySelect" value={formData.vehicleType} onChange={handleInputChange}>
        <option value="">Select...</option>
        <option value="2-Wheeler"> 2-Wheeler</option>
        <option value="4-Wheeler">4-Wheeler</option>
        
      </select>
      <label className=' p-3 font-bold '>
        <p>Vehicle Name:</p>
        <input className='border w-96 p-1 rounded-xl'
          type='text'
          name="vehicle"
          value={formData.vehicle}
          onChange={handleInputChange}
          required
          placeholder='Enter Vehicle Name'
        />
      </label>

      <label className=' p-3 font-bold '>
        <p>Password:</p>
        <input className='border w-96 p-1 rounded-xl'
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          placeholder='Enter Password'
        />
      </label>

     

      <button className='rounded-xl bg-[rgb(31,32,97)] w-40 mx-auto text-white  p-2 mb-4 mt-2' type="submit">Submit</button>
    </form>
      </div>
    </div>
  );
};
export default OwnerSignup;
