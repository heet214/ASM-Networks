import React from "react";
import Carousel from "react-bootstrap/Carousel";
import team from "./images/teamwork.svg";
import car1 from "./images/directorImg.png";
import "./About.css";
export default function About() {
  return (
    <>
      <div className="contact-container">
        <h1 className="contact-header">About Us</h1>

        <div className="section-para">
          <p className="sub-para">
            ASM Networks provides IT services and solutions to organizations of
            different sizes – from start-ups to industry giants. Established in
            the year 2016, Asm Network in Bhandup West, Mumbai is a top player
            in the category Computer AMC in the Mumbai. Our establishment acts
            as a one-stop destination servicing customers both local and from
            other parts of Mumbai. Over the course of our journey, we have
            established a firm foothold in this industry. We belive that
            customer satisfaction is as important as our products and services.
            Beacuse of our team’s hard work, We have garnered a vast base of
            customers, which continues to grow by the day.
          </p>
        </div>

        <div className="carousel-section">
          <div className="carousel-left">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  url="holder.js/800x400?text=First slide&bg=373940"
                  src={car1}
                  alt="First slide"
                  style={{ height: "500px", objectfit: "contain" }}
                />
                <Carousel.Caption>
                  <h3>Managing Director</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="carousel-right">
            <p className="carousel-right-text">
              Our services are aimed at providing the best service to our
              clients . To this end, we combine remote solutions with on-site
              solutions in order to deliver the best results. Efficient
              operations with large team catering to varied queries. Remote and
              on-site support for efficient resolution of customer issues. Quick
              turnaround, providing timely solutions in critical situations.
              Cost effective, innovative practices.
            </p>
          </div>
        </div>
        <div className="section-para">
          <p className="sub-para">
            We employ individuals that are dedicated towards their respective
            roles and put in a lot of effort to achieve the common vision and
            larger goals of the company. In the near future, we aim to expand
            our line of products and services and cater to a larger client base.
            In Mumbai, our establishment occupies a prominent location in
            Bhandup West
          </p>

          <p className="sub-para sub-pad">
            We provide top service in the following categories: Computer AMC,
            Laptop AMC, IT Infrastructure Solution Providers, Computer Hardware
            AMC, Cloud Server Services, Computer Server AMC, Wireless Computer
            Networking Services, Computer AMC For Offices
          </p>
        </div>

        <div className="section-2">
          <div className="segment-left">
            <p className="segment-left-text">
              At ASM we pride ourselves on our staff, working hard to give you
              top-notch service. ASM has been making clients happy since 2016
              and planning to do the same in the future. Find out all the
              various services we provide here at ASM
            </p>
            <button className="segment-left-button">Services</button>
          </div>
          <div className="segment-team">
            <img src={team} className="team-logo" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
