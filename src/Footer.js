import React from 'react';
import './Footer.css';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div class="ft-main-item ft-logo-section">
          <img src={logo} class="ft-logo" />
          <p className="ft-list-items-1">Total IT Solutions Under One Roof !</p>
        </div>
        <div class="ft-main-item">
          <h2 class="ft-title">Explore</h2>
          <ul>
            <li>
              <Link to="/">
                <a className="ft-list-items">Home</a>
              </Link>
            </li>
            <Link to="/Services">
              <li>
                <a href="#" className="ft-list-items">
                  Services
                </a>
              </li>
            </Link>
            <Link to="/About-Us">
              <li>
                <a className="ft-list-items">About Us</a>
              </li>
            </Link>
            <Link to="/Contact-Us">
              <li>
                <a className="ft-list-items">Contact Us</a>
              </li>
            </Link>
          </ul>
        </div>
        <div class="ft-main-item">
          <h2 class="ft-title">Reach us</h2>
          <ul>
            <a href="https://www.google.com/maps/place/ASM+Network/@19.1567462,72.9327844,17.05z/data=!4m12!1m6!3m5!1s0x0:0x5cc82a690e78902e!2sASM+Network!8m2!3d19.1570341!4d72.9327297!3m4!1s0x0:0x5cc82a690e78902e!8m2!3d19.1570341!4d72.9327297">
              <li className="reach-us-text">
                ASM Networks Isc Compound, Janta market Opp Metro Mall, L.B.S
                Marg, Bhandup (West ) Mumbai - 400078 <br /> Phone: 022-25947888
                / 9172269999.
              </li>
            </a>
          </ul>
        </div>

        <div class="ft-main-item">
          <h2 class="ft-title">Follow us at: </h2>
          <ul>
            <li>
              <a href="#" className="ft-list-items">
                instagram
              </a>
            </li>
            <li>
              <a href="#" className="ft-list-items">
                facebook
              </a>
            </li>
            <li>
              <a href="#" className="ft-list-items">
                twitter
              </a>
            </li>
          </ul>
        </div>
        <p className="ft-btm-text">
          &#169;2021 ASM Networks. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
