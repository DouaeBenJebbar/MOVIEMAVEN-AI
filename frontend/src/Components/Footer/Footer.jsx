import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      © {new Date().getFullYear()} EST SALE. All rights reserved.
    </div>
  );
};

export default Footer;
