import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Use navigate for redirection

  const handleLogin = async (e) => {
    e.preventDefault();

    // Mock validation logic to check user credentials
    const storedData = JSON.parse(localStorage.getItem('usersData')) || [];

    const user = storedData.find(u => u.email === email && u.password === password);

    if (user) {
      // Save user details in localStorage or session for profile display
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/profile');  // Redirect to profile page upon successful login
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div>
      <h2 className='RTitle' >Login</h2>
      <form className='log' onSubmit={handleLogin}>
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
        
        <button className='sbtn' type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
