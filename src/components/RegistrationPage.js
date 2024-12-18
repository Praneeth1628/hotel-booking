import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'
function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();  // Use navigate for redirection

  const handleRegistration = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Creating a new user object
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      bookings: [],
    };

    // Retrieve existing users data
    const usersData = JSON.parse(localStorage.getItem('usersData')) || [];

    // Adding new user to existing users
    usersData.push(newUser);

    // Storing updated data in localStorage
    localStorage.setItem('usersData', JSON.stringify(usersData));

    // Redirecting to login page after registration
    navigate('/login');
  };

  return (
    <div>
      <h2 className='RTitle'>Register</h2>
      <div className='reg'>
      <form className='form' onSubmit={handleRegistration}>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        
        <label>Confirm Password:</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />
        
        <button className='sbtn' type="submit">Register</button>
      </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
