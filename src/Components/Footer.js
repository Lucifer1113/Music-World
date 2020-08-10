import React from "react";
import "./Footer.css";
import Brand from "./Brand";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="company-details-section">
        <div>
          <Brand />
        </div>
        <div className="company-details-section-list">
          <p>COMPANY</p>
          <a href="#">About</a>
          <a href="#">Jobs</a>
          <a href="#">For the Record</a>
        </div>
        <div className="company-details-section-list">
          <p>COMMUNITIES</p>
          <a href="#">For Artists</a>
          <a href="#">Developers</a>
          <a href="#">Brands</a>
          <a href="#">Investors</a>
          <a href="#">Vendors</a>
        </div>
        <div className="company-details-section-list">
          <p>USEFUL LINKS</p>
          <a href="#">Help</a>
          <a href="#">Web Player</a>
          <a href="#">Free Mobile App</a>
        </div>
        <div className="company-details-section-list">
          <p>SOCIAL MEDIA</p>
          <ion-icon className='social-media' name="logo-instagram"></ion-icon>
          <ion-icon className='social-media' name="logo-linkedin"></ion-icon>
          <ion-icon className='social-media' name="logo-linkedin"></ion-icon>
        </div>
      </div>
      <div className="legal-section">
        <a href="#">Legal</a>
        <a href="#">Privacy Center</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookies</a>
        <a href="#">About Ads</a>
      </div>
    </div>
  );
};
export default Footer;
