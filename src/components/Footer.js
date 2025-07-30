import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} GlambyRR. All rights reserved.</p>
        <p>
          Follow me: 
          <a href="https://www.facebook.com/Glambyrr19" target="_blank" rel="noopener noreferrer"> Facebook</a> | 
          <a href="https://instagram.com/glambyrr" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
