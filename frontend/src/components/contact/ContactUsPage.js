import React, { Component } from "react";
import './contactus.css';
import contactImg from "../../images/contact_us.jpg";

class ContactUsPage extends Component{
    render() {
        return(
          <div className="contactApp">
            <div className="contactBanner">
            <img src={contactImg} style={{width:"100%", height: "100%", padding: "10px;",media:"(min-width: 350px)"}} />
            </div>
            <div className = "contactForm">
            <p className = "contact">Get in touch with Us</p>
            
            <p className = "contactMsg">We'd love to hear from you, Please drop us a line if you have any query!</p>
              <form > 
                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name"/>

                <label>Last Name</label>
                <input type="text"id="lname" name="lastname" placeholder="Your last name"/>

                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Your email"/>
                
                <label>Subject</label>
                <textarea id="subject" className = "subject" name="subject" placeholder="Write Subject.."></textarea>

                <label>Message</label>
                <textarea id="message" className="msg" name="message" placeholder="Write something.."></textarea>

                <input type="submit" className="btnSendMsg" value="Send Message"/>
              </form>
              </div>
          </div>
        );
     }
}

export default ContactUsPage;