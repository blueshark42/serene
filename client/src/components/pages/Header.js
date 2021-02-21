import React from "react";

import "./Header.css";

import icon from "../../assets/sitting.png";
export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Serene</h1>
        <img src={icon} width="60px" height="80px" />
      </div>
    );
  }
}
