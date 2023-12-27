import React, { useState, useEffect } from 'react';

const UnoccupiedParkingSpaces = () => {
  const [unoccupiedSpaces, setUnoccupiedSpaces] = useState([]);
  const [error, setError] = useState(null);
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUnoccupiedSpaces = async () => {
      try {
        const response = await fetch('http://10.40.28.136:4000/api/v1/parking-space/parking-spaceNotOccupied', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUnoccupiedSpaces(data.parkingSpaces);
          setError(null);
        } else {
          setError('Failed to fetch unoccupied parking spaces');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Error fetching data');
      }
    };

    fetchUnoccupiedSpaces();
  }, []);

  const fetchUserInfo = async (userId) => {
    try {
      const response = await fetch(`http://http://10.40.28.136:4000/api/v1/parking-space/parking-spaceNotOccupied/user-info/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserInfo(data.userInfo);
      } else {
        setError('Failed to fetch user information');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error fetching user information');
    }
  };

  const handleBook = async (space) => {
    // Perform booking logic, e.g., send a request to book the parking space
    setSelectedSpace(space);

    // Fetch user information based on the user ID associated with the parking space
    await fetchUserInfo(space.ownerId);
  };

  return (
    <div className="flex flex-wrap justify-center items-center mt-8">
      {error ? (
        <p>Error: {error}</p>
      ) : unoccupiedSpaces.length === 0 ? (
        <p>No unoccupied parking spaces available</p>
      ) : (
        unoccupiedSpaces.map((space) => (
          <div key={space._id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Location: {space.location}</div>
              <p className="text-gray-700 text-base">Description: {space.parkingAreaDescription}</p>
              <p className="text-gray-700 text-base">Cost: {space.cost}</p>
              <button
                className="w-36 rounded-md bg-blue-700 text-white font-bold m-5 p-1"
                onClick={() => handleBook(space)}
              >
                Book
              </button>
            </div>
          </div>
        ))
      )}
      {selectedSpace && userInfo && (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Booked Space Information</div>
            <p className="text-gray-700 text-base">Location: {selectedSpace.location}</p>
            <p className="text-gray-700 text-base">Description: {selectedSpace.parkingAreaDescription}</p>
            <p className="text-gray-700 text-base">Cost: {selectedSpace.cost}</p>
            <div className="font-bold text-xl mt-2">User Information</div>
            <p className="text-gray-700 text-base">User ID: {userInfo.userId}</p>
            <p className="text-gray-700 text-base">Username: {userInfo.userName}</p>
            {/* Add additional user info here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default UnoccupiedParkingSpaces;
