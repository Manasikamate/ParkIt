import React, { useState } from 'react';

function OwnerSignup(){
  const [formData, setFormData] = useState({
    fullName: '',
    email:"",
    dateOfBirth:"",
    gender:'',
    address: '',
    password: '',
    mobileNumber: '',
    // UPIImage:null,
  });

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData({
  //     ...formData,
  //     profileImage: file,
  //   });
  // };

  // const handleUPIImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData({
  //     ...formData,
  //     UPIImage: file,
      
  //   });
  // };

  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };

  const  handleSubmit = async(e) => {
    e.preventDefault();
    // Add your logic to handle the form data (e.g., submit to a server, update state, etc.)
    console.log('Form Data:', formData);

    try {
          // console.log('Form Data:', formData);
          const response = await fetch('http://10.40.28.136:4000/api/v1/auth/signup/owner', {
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
    <div className='bg-[rgb(221,221,220)] p-10'>
      <div className='w-[600px] bg-white mx-auto rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] '>
      <form onSubmit={handleSubmit} className='flex flex-col'>
      <label className='p-3 '>
        <p className='font-bold'>Full Name:</p>
        <input className='border w-96 p-1 rounded-xl'
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
          placeholder='Enter Full Name'
        />
      </label>
      <label className='p-3 '>
        <p className='font-bold'>Date of Birth:</p>
        <input className='border w-96 p-1 rounded-xl'
          type='date'
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          required
          placeholder='Enter Date of Birth'
        />
      </label>
      <label htmlFor="mySelect" className='font-bold'>Gender:</label>
      <select className='border w-96 p-1 mx-auto rounded-xl' name='gender'  id="mySelect" value={formData.gender} onChange={handleInputChange}>
        <option value="">Select...</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Other">Prefer not to say</option>
      </select>
      <label className='p-3 '>
        <p className='font-bold'>Email:</p>
        <input className='border w-96 rounded-xl p-1'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          placeholder='Enter Your Email'
        />
      </label>
      
      <label className='p-3'>
       <p className='font-bold'> Mobile Number:</p>
        <input className='border w-96 rounded-xl p-1'
          type="tel"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleInputChange}
          required
          placeholder='Enter Contact Number'
        />
      </label>

      <label className='p-3 '>
        <p className='font-bold'>Address:</p>
        <input className='border w-96 rounded-xl p-1'
        type='text'
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
          placeholder='Enter Address'
        />
      </label>

          {/* <label className='p-3'>
            <p className='font-bold'>UPI Barcode:</p>
            <input
              className='border w-96 rounded-xl p-1'
              type='file'
              name='UPIImage'
              onChange={handleUPIImageChange}
              accept='image/*' // Allow only image files
            />
          </label>
 */}


      <label className='p-3'>
        <p className='font-bold'>Password:</p>
        <input className='border w-96 rounded-xl p-1'
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          placeholder='Enter Password'
        />
      </label>

     

      <button className='rounded-xl bg-[rgb(31,32,97)] w-40 mx-auto text-white font-bold p-2 mb-4 mt-2' type="submit">Submit</button>
    </form>
      </div>
    </div>
  );
};
export default OwnerSignup;
