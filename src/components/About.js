import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../data";
import AboutImage from "../assets/undraw-about.png";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about">
        <div className="about-content">
          <h1>
            <Fade bottom cascade>
              about .
            </Fade>
          </h1>
          <Fade bottom>
            <p>{data.abouttext}</p>
          </Fade>
          <Fade bottom>
          <div className="list">
            <p>
              Here is some of the current stack that I am heavily working with.
            </p>
            <ul>
              <li>Python</li>
              <li>Django / Django Rest Framework</li>
              <li>Javascript</li>
              <li>HTML & CSS</li>
              <li>React</li>
            </ul>
          </div>
          </Fade>
        </div>
        <img src={AboutImage} alt="about image"></img>
      </div>
    );
  }
}

export default About;
