import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';

const Header = () => {
  const navigate = useNavigate();

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
        <button className="sign_in_button" onClick={handleSignInClick}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
