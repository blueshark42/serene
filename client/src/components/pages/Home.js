import React, { Component } from "react";

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
      <div className="column">
        <div className="row">
          <div className="button1">
            <img border="0" alt="random vids" src={icon1} width="300" height="380" />
          </div>

          <div className="button4">
            <p>
              <a href="https://www.w3schools.com">
                <img border="0" alt="random songs" src={icon2} width="250" height="240" />
              </a>
            </p>
          </div>

          <div className="button2">
            <p>
              <a href="https://www.w3schools.com">
                <img border="0" alt="random songs" src={icon3} width="290" height="290" />
              </a>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="button3">
            <p>
              <a href="https://www.w3schools.com">
                <img border="0" alt="random songs" src={icon4} width="400" height="240" />
              </a>
            </p>
          </div>

          <div className="button5">
            <p>
              <a href="https://www.w3schools.com">
                <img border="0" alt="random songs" src={icon5} width="260" height="260" />
              </a>
            </p>
          </div>
        </div>
        <h1 className="space">.</h1>
      </div>
    );
  }
}
