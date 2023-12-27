const Notifications = ({ notifications=[] }) => (
    <div className="bg-white rounded-xl mx-12">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            {/* Display notification details */}
            <p>{notification.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  export default Notifications();