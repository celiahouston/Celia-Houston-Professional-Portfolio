import React from "react";
import headshotImage from "./assets/images/headshot.png";

function ContactPage() {
    return (
        <div className="contact-page"> 
            <h1 className="title"> Contact Me </h1>
            <img src={require("./assets/images/headshot.png")} alt="Celia Houston Headshot" className="img-resize" />
            <p className="subtitle">Feel free to get in touch with me if you have any questions!</p>
            <ul className="description">
                <li> Email: celia.houston99@gmail.com</li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/celia-houston-69a210155" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/celia-houston-69a210155</a></li>
                <li> GitHub: <a href="https://github.com/celiahouston" target="_blank" rel="noopener noreferrer">https://github.com/celiahouston</a></li>
            </ul>
        </div>
    )
}

export default ContactPage; 