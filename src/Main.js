// dependencies and info within other forms

import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Projects from "./Projects";
// import Images from "./Images";

// app frame
class Main extends Component {
//   handleClick() {
//     window.document.body.classList.toggle("orange");
//   }
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="WAM">We Are Matt</h1>
          <span className="span1"> a project by Matt Molloy</span>
          {/* <div className="btnbox">
            Theme:
            <button className="grn" onClick={this.handleClick}></button>
            <button className="org" onClick={this.handleClick}></button>
            <button className="pur" onClick={this.handleClick}></button>
          </div> */}
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="./About">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/Resume">Resume</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
            {/* <li><NavLink to="/Images">Images</NavLink></li> */}
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Projects" component={Projects} />
            {/* <Route path="/contact" component={Contact}/> */}
            {/* <Route path="/Images" component={Images}/> */}
          </div>

          <div className="footer">
            <p className="WAM">WAM</p>
            <br />
            <br />©
          </div>
        </div>
        <Contact />
      </HashRouter>
    );
  }
}

export default Main;
