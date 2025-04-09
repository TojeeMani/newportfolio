import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import App from '../../'
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-left">Contanct Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 7907850478
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              tojeemani8@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Kochi, Kerala, India
            </div>
            <div className="c-info-item">
              <a 
                href={process.env.PUBLIC_URL + "/tojee.pdf"} 
                download="tojee_resume.pdf" 
                className="resume-download"
                onClick={(e) => {
                  // Prevent default behavior
                  e.preventDefault();
                  // Create a link element
                  const link = document.createElement('a');
                  link.href = process.env.PUBLIC_URL + "/tojee.pdf";
                  link.download = "tojee_resume.pdf";
                  // Append to body, click, and remove
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <div>
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              placeholder="Message"
              rows="5"
              col="5"
              name="message"
            ></textarea>
            <button>Submit</button>
            {done && "Thank You.."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
