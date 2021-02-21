import React, { Component } from "react";
import { Router } from "@reach/router";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import PositiveMessage from "./pages/PositiveMessage.js";
import StarrySky from "./pages/StarrySky.js";
import Mood from "./pages/Mood.js";
import Footer from "./pages/Footer.js";
import Home from "./pages/Home.js";
import Header from "./pages/Header.js";

import "../utilities.css";

import { socket } from "../client-socket.js";
import { get, post } from "../utilities";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id });
      }
    });
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userId: user._id });
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  // <NotFound default />

  render() {
    return (
      <div>
        <StarrySky />
        <Header />
        <div className="router">
          <Router>
            <Skeleton
              path="/"
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
              userId={this.state.userId}
            />  
          </Router>
        </div>
        <Home />
        <Mood />
        <PositiveMessage userId={this.state.userId} />
        <Footer/>
      </div>
    );
  }
}

export default App;
