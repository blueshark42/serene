import React, { Component } from "react";
import { get } from "../../utilities";

export default class PosMsgDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positiveMessage: "",
    };
  }

  componentDidMount = () => {
    get("/randommessage").then((message) => {
      this.setState({ positiveMessage: message });
    });
  };

  render() {
    return (
      <div className="PosMsgDisplay">
        <h2>{this.state.positiveMessage}</h2>
      </div>
    );
  }
}
