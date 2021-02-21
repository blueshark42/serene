import React, { Component } from "react";

import "../../utilities.css";
import "./Mood.css";

export default class Mood extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
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
        <div className = "dropdown">
            <form onSubmit={this.handleSubmit}>
                <label for="mood">How are you feeling today?</label>
                <br />
                <select 
                    name="mood" 
                    id="mood" 
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <option value="" disabled selected>Select your mood</option>
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="tired">Tired</option>
                    <option value="excited">Excited</option>
                    <option value="annoy">Annoyed</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
            <div id="showMeHappy">
                
            </div>
            <div id="showMeSad">
                <img src="https://mail.google.com/mail/u/0?ui=2&ik=10fdc34691&attid=0.1&permmsgid=msg-f:1692319290736972217&th=177c536dbaeb11b9&view=att&disp=safe&realattid=f_klfb3fyq1"
                width="300"
                height="400"/>
            </div>
            <div id="showMeTired">
                <img src="https://mail.google.com/mail/u/0?ui=2&ik=10fdc34691&attid=0.2&permmsgid=msg-f:1692319290736972217&th=177c536dbaeb11b9&view=att&disp=safe&realattid=f_klfb3fyz2"
                width="450"
                height="400"/>
            </div>
            <div id="showMeExcited">
                <img src="https://mail.google.com/mail/u/0?ui=2&ik=10fdc34691&attid=0.3&permmsgid=msg-f:1692319290736972217&th=177c536dbaeb11b9&view=att&disp=safe&realattid=f_klfb3fy20"
                width="300"
                height="400"/>
            </div>
            <div id="showMeAnnoyed">
                <img src="https://mail.google.com/mail/u/0?ui=2&ik=10fdc34691&attid=0.1&permmsgid=msg-f:1692319290736972217&th=177c536dbaeb11b9&view=att&disp=safe&realattid=f_klfb3fyq1"
                width="300"
                height="400"/>
            </div>
        </div>
    );
  }
}
