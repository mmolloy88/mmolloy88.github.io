import React, { Component } from "react";
import image from './docs/skellyboy.png';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>HELLO</h2> <br/>
        <p> Welcome to my portfolio site.</p>
        <br/><br/>
        <img className="homepage1" 
            alt="a spooky skeleton" 
            src={image} 
            width="200" />
      </div>
    );
  }
}

export default Home;