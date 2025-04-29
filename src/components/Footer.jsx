import React, { useState } from 'react';
import './style/Footer.css';

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact-info">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <div className="currency">
            <h4>CURRENCY</h4>
            <p><span role="img" aria-label="US Flag"> <img 
              style={{height: '2rem', width: '2rem', borderRadius: '50%'}}
            src="/america.png" alt="" /></span> USD</p>
            <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-links">
        <div className="footer-col">
          <h3>mettā muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <i className="icon-instagram"></i>
            <i className="icon-linkedin"></i>
          </div>
        </div>
        <div className="footer-col">
          <h3>mettā muse ACCEPTS</h3>
          <div className="payment-icons">
            <img src="/gpay.png" alt="Google Pay" />
            <img src="/Mastercard_logo.jpg" alt="MasterCard" />
            <img src="/paypal.png" alt="Paypal" />
            <img src="/amex.png" alt="American Express" />
            <img src="apppay.png" alt="Apple Pay" />
            <img src="/shopPay.png" alt="Shop Pay" />
          </div>
        </div>
      </div>

      <div className="footer-mobile">
        <div className="footer-section">
          <h4 onClick={() => toggleSection('about')}>mettā muse <span>{openSection === 'about' ? '˄' : '˅'}</span></h4>
          {openSection === 'about' && (
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          )}
        </div>
        <div className="footer-section">
          <h4 onClick={() => toggleSection('quick')}>QUICK LINKS <span>{openSection === 'quick' ? '˄' : '˅'}</span></h4>
          {openSection === 'quick' && (
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          )}
        </div>
        <div className="footer-section">
          <h4 onClick={() => toggleSection('follow')}>FOLLOW US <span>{openSection === 'follow' ? '˄' : '˅'}</span></h4>
          {openSection === 'follow' && (
            <div className="social-icons">
              <i className="icon-instagram"></i>
              <i className="icon-linkedin"></i>
            </div>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
