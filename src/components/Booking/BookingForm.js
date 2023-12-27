import React, { useState, useEffect } from 'react';
import { jwtDecode as jwt_decode } from 'jwt-decode';

const AddParkingSpaceForm = () => {
  const [formData, setFormData] = useState({
    ownerId: '',
    location: '',
    parkingAreaDescription: '',
    cost: '',
  });

  useEffect(() => {
    // Fetch ownerId from the token in local storage when the component mounts
    const token = localStorage.getItem('token');
    const decodedToken = jwt_decode(token);
    setFormData((prevData) => ({
      ...prevData,
      ownerId: decodedToken.userId,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://10.40.28.136:4000/api/v1/parking-space/addparking-space', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // The data was successfully submitted to the server
        console.log('Data submitted successfully');
      } else {
        // There was an error submitting the data
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Add Parking Space</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-semibold mb-1">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="parkingAreaDescription" className="block text-sm font-semibold mb-1">
            Parking Area Description:
          </label>
          <input
            type="text"
            id="parkingAreaDescription"
            name="parkingAreaDescription"
            value={formData.parkingAreaDescription}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cost" className="block text-sm font-semibold mb-1">
            Cost:
          </label>
          <input
            type="text"
            id="cost"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Add Parking Space
        </button>
      </form>
    </div>
  );
};

export default AddParkingSpaceForm;