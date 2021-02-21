import React, { Component } from "react";

import "../../utilities.css";
import "./Mood.css";

import sitting from "../../assets/sitting.png";
import sleeping from "../../assets/sleeping.png";
import happy from "../../assets/happy.png";

export default class Mood extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  showMeHappy() {
    var happy = document.getElementById("showMeHappy");
    happy.style.display = "block";
  }

  showMeTired() {
    var tired = document.getElementById("showMeTired");
    tired.style.display = "block";
  }

  showMeSad() {
    var sad = document.getElementById("showMeSad");
    sad.style.display = "block";
  }

  showMeExcited() {
    var excited = document.getElementById("showMeExcited");
    excited.style.display = "block";
  }

  showMeAnnoyed() {
    var annoyed = document.getElementById("showMeAnnoyed");
    annoyed.style.display = "block";
  }

  handleSubmit(event) {
    if (this.state.value == "happy") {
      this.showMeHappy();
    } else if (this.state.value == "tired") {
      this.showMeTired();
    } else if (this.state.value == "sad") {
      this.showMeSad();
    } else if (this.state.value == "excited") {
      this.showMeExcited();
    } else if (this.state.value == "annoyed") {
      this.showMeAnnoyed();
    } else {
      alert("Please select a mood!");
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="dropdown1">
        <form onSubmit={this.handleSubmit}>
          <label>How are you feeling today?</label>
          <br />
          <select name="mood" id="mood" value={this.state.value} onChange={this.handleChange}>
            <option value="" disabled value="selected">
              Select your mood
            </option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="tired">Tired</option>
            <option value="excited">Excited</option>
            <option value="annoy">Annoyed</option>
          </select>
          <input type="submit" value="Submit" />
        </form>

        <div id="showMeHappy">
          <img border="0" src={happy} width="220" height="330" />
          <p>
            {" "}
            Glad to know you are doing great! If you feel like it, feel free to leave a positive
            message for those who have not had a good day!{" "}
          </p>
        </div>

        <div id="showMeSad">
          <img border="0" src={sitting} width="270" height="330" />
          <p className="paragraphs">
            {" "}
            I am really sorry about the fact that your day did not go as well as planned. Do not
            worry, not every day will be this bad and in order to stay positive, we need to keep
            going! Read some of the positive messages if you think it will make you feel better!{" "}
          </p>
        </div>

        <div id="showMeTired">
          <img border="0" src={sleeping} width="300" height="220" />
          <p>
            {" "}
            Some days are extremely busy and tiresome, and today seems to have been that kind of a
            day. Working hard will only make you successful in the future, so remember that your
            work will pay off soon!{" "}
          </p>
        </div>

        <div id="showMeExcited">
          <img border="0" src={happy} width="220" height="330" />
          <p>
            {" "}
            We are pleased to know that you are excited! Share your excitement and happiness with
            those around you and spread the positivity!{" "}
          </p>
        </div>

        <div id="showMeAnnoyed">
          <img border="0" src={sitting} width="270" height="330" />
          {" "}
          <p>
            If someone/something has bothered you today, try your best to calm yourself down.
            Remember that you can not control your surroundings, but you can control yourself by
            staying positive!{" "}
          </p>
        </div>
      </div>
    );
  }
}
