import React from "react";
import Title from "./Header";

import "./PositiveMessage.css";
import "../../utilities.css";

export default class PositiveMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="PositiveMessage">
        <Title>Leave a positive message! :)</Title>
        <textarea className="PositiveMessage-input" placeholder="Your message"></textarea>
        <button className="PositiveMessage-button">Submit</button>
      </div>
    );
  }
}
