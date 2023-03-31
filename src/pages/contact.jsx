import React from "react";
import "../pages/contact.css";

export const Contact = () => {
  return (
    <div className="container">
      <h1 className="title">Contact Us</h1>
      <div className="form-container">
        <div className="form-item">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input type="text" id="name" name="name" className="input" />
        </div>
        <div className="form-item">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input type="email" id="email" name="email" className="input" />
        </div>
        <div className="form-item">
          <label htmlFor="subject" className="label">
            Subject
          </label>
          <input type="text" id="subject" name="subject" className="input" />
        </div>
        <div className="form-item">
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea id="message" name="message" className="textarea"></textarea>
        </div>
        <div className="form-item">
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
