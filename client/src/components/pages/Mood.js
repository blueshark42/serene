import React, { Component } from "react";

import "../../utilities.css";
import "./Mood.css";

export default class Mood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
      return (
        <div className = "dropdown">
            <label for="mood">How are you feeling today?</label>
            <br />
            <select name="mood" id="mood">
                <option value="" disabled selected>Select your mood</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="tired">Tired</option>
                <option value="excited">Excited</option>
                <option value="annoy">Annoyed</option>
            </select>
            <div id="showMe">
                <img src="../assets/sitting.png" width="300" height="400"/>
            </div>
        </div>
      );
    }
}