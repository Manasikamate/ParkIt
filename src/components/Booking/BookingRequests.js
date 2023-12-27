const BookingRequests = ({ requests, handleRequest }) => (
    <div>
      <h2>Booking Requests</h2>
      <ul>
        {requests.map((request=[], index) => (
          <li key={index}>
            {/* Display request details */}
            <p>User: {request.user}</p>
            <p>Date: {request.date}</p>
            <button onClick={() => handleRequest(request.id, 'accept')}>Accept</button>
            <button onClick={() => handleRequest(request.id, 'reject')}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
  export default BookingRequests();