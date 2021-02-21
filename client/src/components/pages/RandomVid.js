import React, { Component } from "react";

import "../../utilities.css";

export default class RandomVid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*videos: [
                "https://www.youtube.com/embed/V2a-TZVYMV8", 
                "https://www.youtube.com/embed/Xry_g0Vp5MY"
            ],
            pictures: [
                "https://www.thoughtco.com/thmb/mik7Z00SAYN786BQbieXWOzZmc8=/2121x1414/filters:fill(auto,1)/lotus-flower-828457262-5c6334b646e0fb0001dcd75a.jpg",

            ]*/
        };
    }

    showPic = () => {
        
    }

    render() {

        /*var videos = ["https://www.youtube.com/embed/V2a-TZVYMV8", "https://www.youtube.com/embed/Xry_g0Vp5MY"];

        window.onload = function () {
            var playerDiv = document.getElementById("random_player");
            var player = document.createElement("IFRAME");
            var randomVideoUrl = videos[Math.floor(Math.random() * videos.length)];
            player.setAttribute('width', '640');
            player.setAttribute('height', '390');
            player.setAttribute('src', randomVideoUrl);

            playerDiv.appendChild(player);
        };*/

        return (
            <div class="random-gif">
                <h2>Random Picture</h2>
                <button onclick="showPic()">Give me a Pic!</button>
                <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltce19ac18cfc17bb2/5efa74cfe953921d7fdeaa4c/01_Ask_Riot_Banner_Yuumi.jpg"
                name="getPic" 
                style="width:500px"/>
                
            </div>
        );
    }
}