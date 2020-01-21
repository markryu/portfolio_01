import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../data";
import Logo from "../assets/Vector.png";

class Header extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1 className="heading-background">EFFICIENCY</h1>
        <header>
          <h1>
            <Fade bottom cascade>
              <img src={Logo} height="50px" />
            </Fade>
          </h1>
        </header>
        <Fade bottom>
          <p className="header-title">
            <span className="header00">{data.headerTagline[0]}</span>
            <p></p>
            <span className="header02">{data.headerTagline[1]}</span>
            <br></br>
            <span className="header01">{data.headerTagline[2]}</span>
            <p></p>
            <p className="header03">{data.headerTagline[3]}</p>
            <p></p>
          </p>
        </Fade>
      </div>
    );
  }
}

export default Header;
