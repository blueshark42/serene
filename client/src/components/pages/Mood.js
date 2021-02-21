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
                <label>How are you feeling today?</label>
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
                <p> Glad to know you are doing great! If you feel like it, feel free to leave a positive message for those who have not had a good day! </p>
            </div>

            <div id="showMeSad">
                <img src="https://mail.google.com/mail/u/0?ui=2&ik=10fdc34691&attid=0.1&permmsgid=msg-f:1692319290736972217&th=177c536dbaeb11b9&view=att&disp=safe&realattid=f_klfb3fyq1"
                width="300"
                height="400"/>
                <p> I am really sorry about the fact that your day did not go as well as planned. Do not worry, not every day will be this bad and in order to stay positive, we need to keep going! Read some of the positive messages if you think it will make you feel better! </p>
            </div>
           
            <div id="showMeTired">
                <img src="https://mail.google.com/mail/u/0?ui=2&ik=10fdc34691&attid=0.2&permmsgid=msg-f:1692319290736972217&th=177c536dbaeb11b9&view=att&disp=safe&realattid=f_klfb3fyz2"
                width="450"
                height="400"/>
                <p> Some days are extremely busy and tiresome, and today seems to have been that kind of a day. Working hard will only make you successful in the future, so remember that your work will pay off soon! </p>
            </div>

            <div id="showMeExcited">
                <img src="https://mail.google.com/mail/u/0?ui=2&ik=10fdc34691&attid=0.3&permmsgid=msg-f:1692319290736972217&th=177c536dbaeb11b9&view=att&disp=safe&realattid=f_klfb3fy20"
                width="300"
                height="400"/>

                <p> We are pleased to know that you are excited! Share your excitement and happiness with those around you and spread the positivity! </p>
            </div>
          
            <div id="showMeAnnoyed">
                <img src="https://mail.google.com/mail/u/0?ui=2&ik=10fdc34691&attid=0.1&permmsgid=msg-f:1692319290736972217&th=177c536dbaeb11b9&view=att&disp=safe&realattid=f_klfb3fyq1"
                width="300"
                height="400"/>

                <p> If someone/something has bothered you today, try your best to calm yourself down. Remember that you can not control your surroundings, but you can control yourself by staying positive! </p>
            </div>
        </div>
    );
  }
}
