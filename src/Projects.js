import React, { Component } from "react";

class Projects extends Component {
    render () {
        return (
            <div>
                <div className="padbox">
                <p>
                    My coding journey started in ernest on the 24th of February 2020, at Coder
                    Academy, with an intensive bootcamp that was recommended to me. Prior to
                    this I'd had little experience with code, from accessing the text docs 
                    in the PC game Black and White to add all the spells to my shrine to a
                    handful of basic exercises I did with my partner's father. 
                </p> 
                    <div className="bigbr"></div>
            <hr/>
  
                <p>
                    To learn varied ways of coding, I decided to move all of the information
                    on my projects in to a blog named Weareblog88 built with JavaScript 
                    using the Gatsby framework:
                </p>
                </div>
            <h4 className="quote">
                <a href="https://weareblog88.netlify.app/">
                    check it out here
                </a>
            </h4>
            </div>
        );
    }
}

export default Projects;