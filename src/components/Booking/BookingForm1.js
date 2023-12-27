
import { useEffect } from 'react';
import axios from 'axios';
import React, { useState } from 'react';
import { jwtDecode as jwt_decode, InvalidTokenError } from 'jwt-decode';

function ParkingSpotRegistration() {

  const token = localStorage.getItem('token');
  const decodedToken = jwt_decode(token);
  const initialSpotData = {
    parkingAreaDescription: '', // Corrected typo here
    // parkingImage: null,
    cost: '',
    location: '',
    ownerId:decodedToken.userId,

  };
  

  const [parkingSpots, setParkingSpots] = useState([]);
  const [spotData, setSpotData] = useState(initialSpotData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSpotData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setSpotData((prevData) => ({
  //     ...prevData,
  //     parkingImage: file,
  //   }));
  // };

  // const handleAddSpot = () => {
  //   setParkingSpots([...parkingSpots, spotData]);
  //   setSpotData(initialSpotData);
  // };

  const handleSubmit = async () => {
    setParkingSpots([...parkingSpots, spotData]);
    console.log('Spot Data:', spotData);
    // setSpotData(initialSpotData);
  
    try {
      const formData = new FormData();
      console.log('parkingAreaDescription:', spotData.parkingAreaDescription);
console.log('cost:', spotData.cost);
console.log('location:', spotData.location);

formData.append('parkingAreaDescription', spotData.parkingAreaDescription);
formData.append('cost', spotData.cost);
formData.append('location', spotData.location);

console.log('FormData:', formData);
      const response = await axios.post('http://10.40.28.136:4000/api/v1/parking-space/addparking-space', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (response.status === 200) {
        console.log('Data submitted successfully');
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div>
      <h1 className='font-bold text-xl mt-5'>Parking Spot Registration</h1>
      
      <form className='bg-white p-3 mx-32 rounded-xl mt-7'>
        <label className='font-bold p-1'>
          <p>Spot Description:</p>
          <input
  className='w-96 rounded-md border'
  type="text"
  name="parkingAreaDescription" 
  value={spotData.parkingAreaDescription}
  onChange={handleChange}
  required
/>
        </label>
        <br />

        <label className='font-bold p-1'>
          <p>Spot Location:</p>
          <input
          className='w-96 rounded-md border'
            type="text"
            name="location"
            value={spotData.location}
            onChange={handleChange}
            required
          />
        </label>

        {/* <label className='font-bold p-1'>
          <p>Spot Image:</p>
          <input
          className='w-96 rounded-md border'
            type="file"
            name="parkingImage"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </label>
        <br /> */}

        <label className='font-bold p-1'>
         <p> Cost:</p>
          <input
          className='w-96 rounded-md border'
            type="text"
            name="cost"
            value={spotData.cost}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button className='bg-blue-700 text-white p-1 rounded-md font-bold mt-8' type="button" onClick={handleSubmit} >
          Add Parking Spot
        </button>
        {/* <button type="button" onClick={handleSubmit}>
          Submit
        </button> */}
      </form>

      <div className='bg-white mx-32 rounded-xl mt-12'>
        <h1 className='font-bold text-md'>Registered Parking Slots</h1>
      {parkingSpots.map((spot, index) => (
        <div key={index}>
          <p>Spot {index + 1}:</p>
          <p>Description: {spot.parkingAreaDescription}</p>
          <p>location: {spot.location}</p>
          <p>Cost: {spot.cost}</p>
          {spot.parkingImage && (
            <img src={URL.createObjectURL(spot.parkingImage)} alt={`Spot ${index + 1}`} style={{ maxWidth: '200px' }} />
          )}
        </div>
      ))}
      </div>
    </div>
  );
}

export default ParkingSpotRegistration;
// // 



// import React, { useState } from 'react';

// const AddParkingSpaceForm = () => {
//   const [formData, setFormData] = useState({
//     ownerId: '',
//     location: '',
//     parkingAreaDescription: '',
//     cost: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch('YOUR_SERVER_API_ENDPOINT', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // The data was successfully submitted to the server
//         console.log('Data submitted successfully');
//       } else {
//         // There was an error submitting the data
//         console.error('Submission failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-bold mb-4">Add Parking Space</h2>
//       <form>
//         <div className="mb-4">
//           <label htmlFor="ownerId" className="block text-sm font-semibold mb-1">
//             Owner ID:
//           </label>
//           <input
//             type="text"
//             id="ownerId"
//             name="ownerId"
//             value={formData.ownerId}
//             onChange={handleChange}
//             className="w-full border rounded-md p-2"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="location" className="block text-sm font-semibold mb-1">
//             Location:
//           </label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             className="w-full border rounded-md p-2"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="parkingAreaDescription" className="block text-sm font-semibold mb-1">
//             Parking Area Description:
//           </label>
//           <input
//             type="text"
//             id="parkingAreaDescription"
//             name="parkingAreaDescription"
//             value={formData.parkingAreaDescription}
//             onChange={handleChange}
//             className="w-full border rounded-md p-2"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="cost" className="block text-sm font-semibold mb-1">
//             Cost:
//           </label>
//           <input
//             type="text"
//             id="cost"
//             name="cost"
//             value={formData.cost}
//             onChange={handleChange}
//             className="w-full border rounded-md p-2"
//             required
//           />
//         </div>

//         <button
//           type="button"
//           className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//           onClick={handleSubmit}
//         >
//           Add Parking Space
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddParkingSpaceForm;