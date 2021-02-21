import React from "react";
import Title from "./Header";

import "./PositiveMessage.css";
import "../../utilities.css";

import { socket } from "../../client-socket.js";

import { get, post } from "../../utilities.js";

export default class PositiveMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      responseMessage: "", // If we have time we can have a text say "Login to submit!" Also a checker to make sure people dont submit offensive things
    };
  }

  submitMessage = () => {
    if (!this.props.loggedUserId) {
      console.log("Not logged in!");
      return;
    }

    post("/api/newmessage", { content: this.state.message });
    console.log("Sent");
  };

  render() {
    return (
      <div className="PositiveMessage">
        <Title>Leave a positive message! :)</Title>
        <textarea
          className="PositiveMessage-input"
          placeholder="Your message"
          value={this.state.message}
          onChange={(event) => {
            this.setState({ message: event.target.value });
          }}
        />
        <button className="PositiveMessage-button" onClick={this.submitMessage}>
          Submit
        </button>
      </div>
    );
  }
}
