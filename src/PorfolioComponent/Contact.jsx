import { useState } from "react";
import { Link } from "react-router-dom";

export function Contact() {
    return (
        <article className="contact-section">
           <div className="info">
              <h2 className="touch-text">Get in Touch</h2>
              <p className="demo">I Am open to internships and collaboration. Feel free to reach out!</p>
           </div>

           <div className="contact-info">
              <form className="contact-form">
                 <h2 className="contact-text">Contact Form</h2>
                 <div className="wrapper">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="iname" id="name"/>
                 </div>

                 <div className="wrapper">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="iemail" id="email"/>
                 </div>

                 <div className="wrapper">
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" id="message" rows="4" columns="10"></textarea>
                 </div>

                 <div className="wrapper">
                    <button className="message-btn">Send Message</button>
                 </div>
              </form>

              <div className="contact-container">
                 <p className="contact-details"><span className="contact-icon">📧</span><a href="mailto: taukirshaikh415@gmail.com" id="mylink">Send Email</a></p>
                 <p className="contact-details"><span className="contact-icon">📧</span><a href="https://www.linkedin.com/in/taukir-shaikh-81029733b" target="_blank" 
                  rel="noopener noreferrer" id="mylink">Visit Linkin Profile</a></p>
              </div>
           </div>

           <p className="greet">Thanks for visiting my Portfolio</p>
        </article>
    );
}

