import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';

const Header = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Example: Fetch user data from localStorage or API
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleSignInClick = () => {
    navigate('/login');
  };

  return (
    <div className="header">
      <div className="header_left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>My List</li>
        </ul>
      </div>
      <div className="header_right">
        <img src={search_icon} alt="Search" className="icons" />
        {user && user.username ? (
          <div className="user_circle">
            {user.username.charAt(0).toUpperCase()}
          </div>
        ) : (
          <button className="sign_in_button" onClick={handleSignInClick}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
