import React from "react";

import "./PositiveMessage.css";
import "../../utilities.css";

export default class PositiveMessage extends React.Component {

  render() {
    return (
      <div className="PositiveMessage">
        <h1 className="title">Leave a positive message! :)</h1>
        <textarea className="PositiveMessage-input" placeholder="Your message"></textarea>
        <button className="PositiveMessage-button">Submit</button>
      </div>
    );
  }
}
