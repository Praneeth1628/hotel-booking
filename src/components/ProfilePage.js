import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import './styles.css';
import Cookies from 'js-cookie';
function ProfilePage() {
  const [userDetails, setUserDetails] = useState({});
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = JSON.parse(localStorage.getItem('loggedInUser')) || {};
      setUserDetails(userData);
      setBookings(userData.bookings || []);
    };

    fetchUserData();
  }, []);

  const handleNewBooking = (newBooking) => {
    const updatedBookings = [...bookings, newBooking];
    const updatedUser = { ...userDetails, bookings: updatedBookings };
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
    setBookings(updatedBookings);
  }; // Ensure js-cookie is installed

const handleLogout = () => {
  // Remove user login data from cookies
  Cookies.remove('loggedInUser');
  
  // Redirect the user to the login page
  window.location.href = '/login';
};


  const cancelBooking = (bookingId) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== bookingId);
    const updatedUser = { ...userDetails, bookings: updatedBookings };
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
    setBookings(updatedBookings);
  };

  const generateBookingStatement = (booking) => {
    return `Booking Statement:
    Room: ${booking.room}
    Check-in: ${booking.checkIn}
    Check-out: ${booking.checkOut}
    No.Of guests: ${booking.numberOfGuests}
    Status: ${booking.status}`;
  };

  return (
    <div>
      <h2 className='profile'>Profile</h2>
      <div className='ud'>
        <h3 className='user'>User Details:</h3>
        <p className='name'>Name: <b>{userDetails.name}</b></p>
        <p className='email'>Email: <b>{userDetails.email}</b></p>
        <button className='logout' onClick={handleLogout}>Logout</button>
      </div>

      <div className='Bcont'>
        <h3 className='bookings'>Bookings:</h3>
        <BookingForm onBooking={handleNewBooking} />
        <hr/><h3 className='history'>Booking History:</h3><hr/>
        <table className='bookhistory' border='2px'>
          <thead>
            <tr>
              <th>Room</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>No.of Guests</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='Tbody'>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.room}</td>
                <td>{booking.checkIn}</td>
                <td>{booking.checkOut}</td>
                <td>{booking.numberOfGuests}</td>
                <td>{booking.status}</td>
                <td>
                  <button onClick={() => cancelBooking(booking.id)}>Cancel</button>
                  <button onClick={() => alert(generateBookingStatement(booking))}>Print Statement</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfilePage;
