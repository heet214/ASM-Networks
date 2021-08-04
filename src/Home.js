import React from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import computers from "./images/computers.png";
import boxes from "./images/boxes.svg";
import economy from "./images/economy.svg";
import contract from "./images/contract.svg";
import earth from "./images/earth.svg";
import customer from "./images/customer-service.svg";
import server from "./images/server1.svg";
import vadilal from "./images/vadilal.svg";
import oppo from "./images/oppo.svg";
import justice from "./images/justice.png";
import maharail from "./images/maharail.png";
import location1 from "./images/location1.svg";
import logo from "./images/logo.png";

import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <section className="section-land">
        <div className="segment-left">
          <p className="text-heading">
            Total IT Solutions <br /> Under One Roof
          </p>
          <p className="text-sub-heading">
            From Cloud Services To Security System <br /> We’ve Got You Covered
          </p>

          <Link to="/Services">
            <button className="btn btn-services">Explore Services</button>
          </Link>
        </div>
        <div className="segment-right">
          <img
            src={server}
            className="land-svg"
            alt="computers services image"
          />
        </div>
      </section>

      {/*------------------- Services Page --------------------- */}

      <section className="section-services">
        <div>
          <h1 className="service-title">Why Choose ASM Networks ?</h1>
        </div>
        <div className="section-services-list">
          <div className="service-wrap">
            <div>
              <img className="service-icon" src={earth} alt="" />
            </div>
            <div>
              <p className="service-text">World Class Service</p>
            </div>
          </div>
          <div className="service-wrap">
            <div>
              <img className="service-icon" src={contract} alt="" />
            </div>
            <div>
              <p className="service-text">Annual Maintenance Contract</p>
            </div>
          </div>
          <div className="service-wrap">
            <div>
              <img className="service-icon" src={economy} alt="" />
            </div>
            <div>
              <p className="service-text">Competetive Prices & TImeliness</p>
            </div>
          </div>
          <div className="service-wrap">
            <div>
              <img className="service-icon" src={boxes} alt="" />
            </div>
            <div>
              <p className="service-text">Warehouse And Packaging</p>
            </div>
          </div>
          <div className="service-wrap">
            <div>
              <img className="service-icon" src={customer} alt="" />
            </div>
            <div>
              <p className="service-text">Prompt Customer Service</p>
            </div>
          </div>
        </div>

        {/*------------------- Services Tool --------------------- */}

        <div className="services-tool">
          <div className="service-tool-left">
            <p className="service-tool-left-text">Services</p>
          </div>
          <div className="service-tool-right">
            <hr width="1" size="700"></hr>
            <div className="service-tool-right-content">
              Annual <br /> Maintenance
            </div>
            <div className="service-tool-right-content">
              Thin Client <br /> Solutions
            </div>
            <div className="service-tool-right-content">
              Facility <br /> Management
            </div>
            <div className="service-tool-right-content">
              Tally <br /> Optimizations
            </div>
            <div className="service-tool-right-content">
              Anti Virus <br /> Solutions
            </div>
            <div className="service-tool-right-content">
              IP/CCTV <br /> Surveillance
            </div>
            <div className="service-tool-right-content">
              Web & Email <br /> Hosting
            </div>
            <div className="service-tool-right-content">Lease Line</div>
            <Link to="/Services">
              <button className="btn btn-see-more">See More</button>
            </Link>
          </div>
        </div>
      </section>

      {/*------------------- Testimonials --------------------- */}

      <section className="section-testimonials">
        <div className="testimonial-text-area">
          <h1 className="testimonial-heading">
            We are proud to have worked with some of the largest organisations
            in the industry
          </h1>
          <p className="testimonial-sub-heading">
            We work to get the best for our clients. We pride ourselves on the
            relationships we have with some of the biggest organisations within
            the industry.
          </p>
          <p className="testimonial-sub-heading">
            Some of the organisations we have worked with are below
          </p>
        </div>
        <div className="testimonial-images">
          <img src={oppo} alt="" className="testimonial-logo" />
          <img src={justice} alt="" className="testimonial-logo" />
          <img src={vadilal} alt="" className="testimonial-logo" />
          <img src={maharail} alt="" className="testimonial-logo" />
        </div>
        {/*------------------- CONTACT US --------------------- */}
        <div className="contact-us-container">
          <div className="contact-us-text">
            <h1 className="contact-us-text-heading">
              What can we help you with ?
            </h1>
            <p className="contact-us-text-sub-heading">
              Reach out to us here !
            </p>
          </div>

          <div className="contact-us-box">
            <Link to="/Contact-Us">
              <img src={location1} alt="" className="contact-us-logo" />
            </Link>
            <button className="btn btn-contact-services">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  );
}
