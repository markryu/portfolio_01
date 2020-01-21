import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../data";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="about">
        <div className="about-content">
          <h1>
            <Fade bottom cascade>
              contact .
            </Fade>
          </h1>
          <Fade bottom>
            <p>
              Although I specialize on company intranets, I also make landing
              pages, personal websites and other web development jobs.
              <br />
              Get in touch and send me an email!
            </p>
            <button className="contact-button">
              <a href={`mailto:${data.contactEmail}`}>SEND EMAIL</a>
            </button>
            <div className="footer">
              <hr />
              &copy; Arvin Mark Atienza 2020
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Contact;
