import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import RoomList from './components/RoomList';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import Footer from './components/Footer';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<RoomList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
