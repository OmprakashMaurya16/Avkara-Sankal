import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="messages">
            <a className="message"  href="#">Guidelines To Be Followed</a>
            <a className="message" href="#">Contact Us</a>
            <a className="message" href="#">Privacy Policy | Terms Of Use</a>
          </div>
          <div className="copyright">
            &copy; 2024 Avkara Santral, All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
