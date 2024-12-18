import React, { useState } from 'react';

function BookingForm({ onBooking }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('Single');
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new booking object
    const newBooking = {
      id: Date.now(),
      room: roomType,
      checkIn,
      checkOut,
      numberOfGuests,
      status: 'Pending',
    };

    // Pass booking details to parent (ProfilePage)
    onBooking(newBooking);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Check-in Date:</label>
      <input 
        type="date" 
        value={checkIn} 
        onChange={(e) => setCheckIn(e.target.value)} 
      />

      <label>Check-out Date:</label>
      <input 
        type="date" 
        value={checkOut} 
        onChange={(e) => setCheckOut(e.target.value)} 
      />

      <label>Room Type:</label>
      <select 
        value={roomType} 
        onChange={(e) => setRoomType(e.target.value)}
      >
        <option>Single</option>
        <option>Double</option>
        <option>Suite</option>
      </select>

      <label>Number of Guests:</label>
      <input 
        type="number" 
        value={numberOfGuests} 
        onChange={(e) => setNumberOfGuests(e.target.value)} 
       max='4' min='1'/>

      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
