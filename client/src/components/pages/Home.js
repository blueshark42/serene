import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Home.css";

import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="column">
          <div className="row">
            <div className="button1">
              <Link to="/mood">
                <img border="0" alt="Mood Button" src={icon1} width="300" height="380" />
              </Link>
            </div>

            <div className="button4">
              <Link to="/positivemessage">
                <img
                  border="0"
                  alt="Write a positive message"
                  src={icon2}
                  width="300"
                  height="380"
                />
              </Link>
            </div>

            <div className="button2">
              <img border="0" alt="random songs" src={icon3} width="300" height="380" />
            </div>
          </div>

          <div className="row">
            <div className="button3">
              <img border="0" alt="random songs" src={icon4} width="300" height="380" />
            </div>

            <div className="button5">
              <img border="0" alt="random songs" src={icon5} width="300" height="380" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
