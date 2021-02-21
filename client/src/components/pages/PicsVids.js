import React, { Component } from "react";

import "../../utilities.css";
import "./PicsVids.css";

import msg1 from "../../assets/msg1.png";
import msg2 from "../../assets/msg2.png";

export default class RandomVid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*videos: [
                "https://www.youtube.com/embed/V2a-TZVYMV8", 
                "https://www.youtube.com/embed/Xry_g0Vp5MY"
            ],
            pictures: [
                {msg1},
                {msg2}
            ]*/
        };
    }

    render() {
        return (
            <div class="random-pic">
                <img border="0" alt="random pic" src={msg1} width="400px" height="400px"/>
            </div>
        );
    }
}