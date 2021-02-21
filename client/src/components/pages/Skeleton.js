import React, { Component } from "react";
import PosMsgDisplay from "../modules/PosMsgDisplay.js";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";

const GOOGLE_CLIENT_ID = "242644174680-siihmdrs3v53qkjpekb0b5j6sbsk0be7.apps.googleusercontent.com";

import Home from "./Home.js";

export default class Skeleton extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
        <div className="Skeleton">
          {this.props.userId ? (
            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={this.props.handleLogout}
              onFailure={(err) => console.log(err)}
            />
          ) : (
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={this.props.handleLogin}
              onFailure={(err) => console.log(err)}
            />
          )}
        </div>

        <PosMsgDisplay />
        <Home/>
      </>
    );
  }
}
