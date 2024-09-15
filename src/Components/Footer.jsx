import React from 'react';


export default function Footer() {
  return (
    <footer className="footer-container" role="contentinfo">
      <div className="messages">
        <a className="message" href="#" aria-label="Guidelines to be followed">Guidelines To Be Followed</a>
        <a className="message" href="#" aria-label="Contact Us">Contact Us</a>
        <a className="message" href="#" aria-label="Privacy Policy and Terms of Use">Privacy Policy | Terms Of Use</a>
      </div>
      <div className="copyright">
        &copy; 2024 Avkara Santral, All rights reserved
      </div>
    </footer>
  );
}
