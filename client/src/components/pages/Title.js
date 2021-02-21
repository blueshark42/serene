import React from "react";

import "./Title.css";

export default class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p className="Title">{this.props.children}</p>;
  }
}
