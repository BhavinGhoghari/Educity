import { React } from "react";
import { useState } from "react";
import "./Contact.css";
import msgIcon from "../Photos/msg-icon.png";
import mailIcon from "../Photos/mail-icon.png";
import phoneIcon from "../Photos/phone-icon.png";
import locationIcon from "../Photos/location-icon.png";
import whiteArrow from "../Photos/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0a19158c-82f5-4c10-a93d-320f850f1941");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a Message
            <img src={msgIcon} alt=""/>
          </h3>
          <p>
            Feel Free to react out through contact from or find our contact
            information below.Your feedback ,questions,and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li>
              <img src={mailIcon} alt=""/>
              Contact@abc.dev
            </li>
            <li>
              <img src={phoneIcon} alt=""/>
              +91 1234567980
            </li>
            <li>
              <img src={locationIcon} alt=""/>
              Katargam,Surat <br />
              395004, Gujarat
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Mobile Number"
              required
            />
            <label>Write Your Message Here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Write here"
              required
            />
            <button type="submit" className="btn dark-btn">
              Submit Now
              <img src={whiteArrow} alt=""/>
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
