import React, { Component } from 'react';
import './Contact.css';
import reachLogo from './images/location2.svg';
import { firestore } from './Firebase';

// Reference messages collection
var messagesRef = firestore.collection('users');
// Listen for form submit
// document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  //Get value
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  //   Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
  messagesRef
    .add({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message,
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
}

class Contact extends React.Component {
  render() {
    return (
      <div className="segment-contact">
        <div className="reach-us-segment">
          <div className="reach-us-logo-box">
            <img src={reachLogo} className="reach-us-logo" alt="" />
          </div>
          <div className="reach-us-text-box">
            <div className="text-box-header">Reach us at</div>
            <div className="text-box-sub-heading">
              <a
                className="reach-us-link"
                href="https://www.google.com/maps/place/ASM+Network/@19.1567462,72.9327844,17.05z/data=!4m12!1m6!3m5!1s0x0:0x5cc82a690e78902e!2sASM+Network!8m2!3d19.1570341!4d72.9327297!3m4!1s0x0:0x5cc82a690e78902e!8m2!3d19.1570341!4d72.9327297"
              >
                ASM Networks Isc Compound, Janta market Opp Metro Mall, L.B.S
                Marg, Bhandup (West) Mumbai - 400078 Phone: 022-25947888 /
                9172269999
              </a>
            </div>
          </div>
        </div>
        <h1 className="span-email">Email: purchase@asmnetwork.co.in</h1>

        <div className="contact">
          <h1 className="contact-form-header">Contact us for more details </h1>
          <div className="alert">Your message has been sent!</div>
          <form id="contactForm">
            <p className="name-field">
              <label className="label-text">
                Name <span>*</span>
              </label>
              <input type="text" name="name" id="name" required />
            </p>
            <p className="company-field">
              <label className="label-text">Company</label>
              <input type="text" name="company" id="company" />
            </p>
            <p className="email-field">
              <label className="label-text">
                Email <span>*</span>
              </label>
              <input type="email" name="email" id="email" required />
            </p>
            <p className="phone-field">
              <label className="label-text">Phone</label>
              <input type="text" name="phone" id="phone" />
            </p>
            <p className="message-field full">
              <label className="label-text">Message</label>
              <textarea name="message" rows="5" id="message" />
            </p>
            <p className="required-field">
              Required field <span>*</span>
            </p>
            <p className="submit-button">
              <button
                type="submit"
                className="btn-reach-us"
                onClick={submitForm}
              >
                Submit
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
export default Contact;
