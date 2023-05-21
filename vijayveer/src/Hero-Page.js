import React, { Component } from "react";
import "./Hero-Page.css";


class HeroPage extends Component {
 state = {clicked: false};
 handleclick = ()=> {
    this.setState({clicked:!this.state.clicked})
 }
    render() {
    return(
      <>
      
      <header class="main">
        <a href="index.html">
        <img className="logo" src="./images/text-1683699648162.png" alt="text" /> 

       
        </a>
        <div className="navbar">
        <ul id="navbarj"  className={this.state.clicked ? "#navbarj active" : "#navbarj"}>
        <li className="navbarjk"><a id="a" className="active" href="index.html">Home</a></li>
        <li className="navbarjk"><a id="a" href="index.html">About</a></li>
        <li className="navbarjk"><a id="a" href="index.html">Work</a></li>
        <li className="navbarjk"><a id="a" href="index.html">Contact</a></li>
      </ul>
        </div>
        <div id="mobile" onClick={this.handleclick}>
            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        </header>
        <section>
        <img className="intention" src="./images/intention.png" alt="intention" />
        <i><h2  class="vision">Our Vision Is To Expand Your Vision</h2></i>
        <img src="./images/clear ant .jpg" id="Ant_Fire"/>
        </section>
     
         
</>
    );

    };

};



export default HeroPage;







































        
        