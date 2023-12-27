import React, { useState } from 'react';
import BookingForm from './BookingForm';
// Component for displaying booking history
const BookingHistory = ({ bookings }) => (
  <div>
    <h2 className='text-md font-bold mt-14'>Booking History</h2>
  <div className='p-5  h-[200px] overflow-scroll overflow-x-hidden bg-white rounded-2xl mx-14'>
    
    <ul>
      {bookings.map((booking, index) => (
        <li key={index}>
          <p>User: {booking.user}</p>
          <p>Date: {booking.date}</p>
          <p>Status: {booking.status}</p>
        </li>
      ))}
    </ul>
  </div>
  </div>
);

// Component for displaying notifications
const Notifications = ({ notifications }) => (

  <div>
    <h2 className='font-bold text-md'>Notifications</h2>

<div className='p-5  h-[200px] overflow-scroll overflow-x-hidden bg-white rounded-2xl mx-14 '>
  
  <ul>
    {notifications.map((notification, index) => (
      <li key={index}>
        <p>{notification.message}</p>
      </li>
    ))}
  </ul>
</div>
  </div>
);

// Component for handling and displaying booking requests
const BookingRequests = ({ requests, handleRequest }) => (
  <div>
    <h2 className='font-bold text-md  mt-14'>Booking Requests</h2>
  <div className='p-5  h-[200px] overflow-scroll overflow-x-hidden bg-white rounded-2xl mx-14'>
    
    <ul>
      {requests.map((request, index) => (
        <li key={index}>
          <p>User: {request.user}</p>
          <p>Date: {request.date}</p>
          <button onClick={() => handleRequest(request.id, 'accept')}>Accept</button>
          <button onClick={() => handleRequest(request.id, 'reject')}>Reject</button>
        </li>
      ))}
    </ul>
  </div>
  </div>
);

// OwnerPage component combining all the components
const OwnerPage = () => {
  // Initialize state with default values
  const [bookingHistory, setBookingHistory] = useState([
    { user: 'User1', date: '2023-01-01', status: 'Completed' },
    { user: 'User2', date: '2023-02-15', status: 'Canceled' },
    // Add more booking history data as needed
  ]);

  const [notifications, setNotifications] = useState([
    { message: 'New booking received.' },
    { message: 'Reminder: Upcoming booking tomorrow.' },
    // Add more notifications as needed
  ]);

  const [bookingRequests, setBookingRequests] = useState([
    { id: 1, user: 'User3', date: '2023-03-10' },
    { id: 2, user: 'User4', date: '2023-04-05' },
    // Add more booking requests as needed
  ]);

  const handleRequest = (requestId, action) => {
    // Handle the booking request (accept or reject)
    // Update the bookingRequests state accordingly
    const updatedRequests = bookingRequests.filter((request) => request.id !== requestId);
    setBookingRequests(updatedRequests);
    // You can also perform additional actions based on the action (accept/reject)
    if (action === 'accept') {
      // Handle accept logic
      setNotifications([...notifications, { message: `Booking accepted for request ${requestId}.` }]);
    } else if (action === 'reject') {
      // Handle reject logic
      setNotifications([...notifications, { message: `Booking rejected for request ${requestId}.` }]);
    }
  };

  return (
    <div className="  h-full bg-[rgb(232,232,232)]">
      {/* <h1>Welcome, Owner!</h1> */}
      <div className='flex flex-row -dotted'>
      <div className=" w-3/5 h-screen overflow-scroll overflow-x-hidden">
      <BookingForm/>
      </div>
      <div className="flex flex-col   w-2/5">
      <Notifications notifications={notifications} />
      <BookingRequests requests={bookingRequests} handleRequest={handleRequest} />
      <BookingHistory bookings={bookingHistory} />
      </div>
      
      </div>
    </div>
  );
};

export default OwnerPage;
