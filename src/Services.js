import React from "react";
import "./Services.css";
export default function Services({ title, image, description }) {
  return (
    <div className="service">
      <div className="service__img-container">
        <img src={image} className="service__img" alt="" />
      </div>

      <div className="service__info">
        <h1 className="service__info-heading">{title}</h1>
        <p className="service__info-description">{description}</p>
        <button className="btn service-btn">Read More</button>
      </div>
    </div>
  );
}
