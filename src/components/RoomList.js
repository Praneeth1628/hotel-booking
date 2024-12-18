import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

function RoomList() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      navigate('/profile');
    } else {
      alert('Please log in to book a room.');
      navigate('/login');
    }
  };

  return (
    <div className='hm'>
      <h2 className='RL'>Available Rooms</h2><br/>
      <ul className='list'> 
        <div className='image'>

          <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Single"/>
          <div className='btn'>
            <li><b>Single Bed - $100</b></li>
            <button className='bookbtn' onClick={handleBookNow}>Book</button>
          </div>

          <img src="https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Double"/>
          <div className='btn'>
            <li><b>Double Bed - $150</b></li>
            <button className='bookbtn' onClick={handleBookNow}>Book</button>
          </div>

          <img src="https://images.pexels.com/photos/5461600/pexels-photo-5461600.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Suite"/>
          <div className='btn'>
            <li><b>Suite Room - $300</b></li>
            <button className='bookbtn' onClick={handleBookNow}>Book</button>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default RoomList;
