import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3c6e9298-234f-4bb5-bfe7-b3fa7a6d0863");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      event.target.reset(); // Clear form fields
      setSuccessMessage("Form submitted successfully!"); // Update success message state

      // Automatically hide the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } else {
      alert("There was an issue submitting the form. Please try again.");
    }
  };

  return (
    <div className="contact" id="contact">
      <h3>CONTACT ME</h3>
      <div className="main">
        <div className="left-form">
        
          <form onSubmit={onSubmit}>
            <input type="text" name="name" className="name" placeholder="Your Name" required />
            <input type="email" name="email" className="email" placeholder="Your Email" required />
            <textarea name="message" className="message" placeholder="Your Message" required></textarea>
            <button type="submit">Submit Form</button>
          </form>
          {successMessage && (
            <div  className="success-message">{successMessage}</div>
          )}
          
        </div>
        <div className="right-div">
          <div className="contact-info">
            <p>
              <strong>Phone:</strong> 9339896412
            </p>
            <p>
              <strong>Email:</strong> arnabpramanik43@gmail.com
            </p>
          </div>
          <div className="logo">[Your Logo]</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
