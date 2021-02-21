import React, { Component } from "react";
import "./Hobbies.css";

class Hobbies extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="header">
          <h1>Fun Activities and Hobbies ヾ(＠＾▽＾＠)ﾉ</h1>
        </div>
    
        <div class="row">
          <div class="card">
            <h2>Let's get messy!</h2>
            <p>Some people find it extremely relieving to play with slime when they are stressed! Learn how to make slime with <a href="https://www.youtube.com/watch?v=FAHUkhV72Jw">this video tutorial here</a>! You will need one cup of flour, 0.5 cups of salt, 3 tbsp of cream of tartar, 1 tbsp  of oil, 0.5 cups of boiling water, glitter, lavender oil, and food colouring.</p>
            <iframe width="420" height="315"
              src="https://www.youtube.com/embed/FAHUkhV72Jw">
            </iframe>
          </div>

          <div class="card">
            <h2>Get in touch with yourself!</h2>
            <p>Journaling can be a great way to process feelings that you may not be able to express while talking to other people. To journal, all you need is a journal (obviously!) and any writing utensil of your choice. <a href="https://www.youtube.com/watch?v=SqNlmaP5X5s">Here’s a video</a> on the benefits of journaling, whether simply as time during which you are solely focusing on your own feelings and needs, or as a method of adjusting your mindset towards your life!</p>
            <iframe width="420" height="315"
              src="https://www.youtube.com/embed/SqNlmaP5X5s">
            </iframe>
          </div>

          <div class="card">
            <h2>Ready to craft? Here we go!</h2>
            <p>Crocheting is a fantastic low-budget activity to relax and have fun, all while crafting the grand projects of your dreams! All you need to get started is a crochet hook <a href="https://www.amazon.com/gp/product/B008J140U8/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1">(this is a great choice!)</a> and any yarn that you may have lying around your house. Check out <a href="https://youtu.be/jazV_BHpTB4">this video</a> before getting started for a better idea of what yarn or crochet hook you would like to purchase! </p>
            <iframe width="420" height="315"
              src="https://www.youtube.com/embed/jazV_BHpTB4">
            </iframe>
          </div>

          <div class="card">
            <h2>Another activity for the artistic creators out there!</h2>
            <p>Embroidery is a highly versatile craft that can be applied to clothing, used as home decor, or even made into patches! You'll need embroidery thread, hoops, and fabric to get started, amounting to around a $30 starting cost total. <a href="https://youtu.be/2ATJuHN-C9A">Here's a comprehensive video explanation,</a> as well as a <a href="https://bychloewen.com/embroidery">website with links to buy supplies</a> for your first project!</p>
            <iframe width="420" height="315"
              src="https://www.youtube.com/embed/2ATJuHN-C9A">
            </iframe>
          </div>

          <div class="card">
            <h2>Let's get our blood pumping!</h2>
            <p>Exercising is good for your body and your mind, and you don't need anything to get started except for strong willpower and water to stay hydrated! Also, remember that exercise doesn't only involve weightlifting or intense cardio - try your hand at <a href="https://www.chloeting.com/program/2019/two-weeks-shred-challenge.html">pilates with Chloe Ting</a> or <a href="https://www.yogabycandace.com/yoga-videos">yoga and guided meditation with Candace Moore!</a></p>
            <iframe width="420" height="315"
              src="https://www.youtube.com/embed/2MoGxae-zyo">
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Hobbies;
