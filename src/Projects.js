import React, { Component } from "react";
import Images from "./Images";
import Game from "./Game";

class Projects extends Component {
    render () {
        return (
            <div>

                {Images}

                <p>My coding journey started in ernest on the 24th of February 2020, at Coder
                    Academy, with an intensive bootcamp that was recommended to me. Prior to 
                    this I'd had little experience with code, from accessing the text docs 
                    in the PC game Black and White to add all the spells to my shrine to a 
                    handful of basic exercises I did with my partner's father. </p> 
                    <div className="bigbr"></div>
                <h3>Terminal Diary</h3>
                <p>Starting with a clean slate, we were taken through the basics; the terminal,
                    starting with Ruby and it's basic functions and datatypes culminating in
                    developing a Ruby application that ran in the terminal.</p>
                <p>This offline application would take the user through a few basic steps, asking
                    them how their day was going, asking 3 questions with boolean (yes/no) answers
                    as well as a rating out of 10 for how their day was going and finally prompting
                    the user to fill out a "diary entry" that was saved to a .txt document
                {/* add image */}
                </p><div className="bigbr"></div>
                
                <h3>Portfolio: First attempt</h3>
                <p>Continuing on from my first programming language, I was taught HTML and CSS. 
                    The site was made up of a handful of different pages and was hosted through
                    Github: https://mmolloy88.github.io/folio1/src 
                {/* add image */}
                </p><div className="bigbr"></div>

                <h3>Second hand magic</h3>
                <p>After launching the site, we dove straight back in to Ruby on Rails, launching
                    a full-stack application using PostgreSQL as the database. Second hand magic 
                    was a two way market place where people could post and buy their used magic
                    the Gathering cards: https://safe-sierra-87003.herokuapp.com/
                {/* add image */}
                </p><div className="bigbr"></div>

                <h3>Various Activities</h3>
                <p>Along my way learning the concepts of coding I also worked on several smaller
                    activities like messing around with CSS and building a todo list some of these
                    are uploaded in repositories on my Github account 
                {/* add image */}
                </p><div className="bigbr"></div>

                <h3>Gamerspace Forum</h3>
                <p> As our final project for Coder academy we were split in to small groups and
                    tasked with creating another full stack application, my group decided to create
                    a gaming forum... (work in progress)                   
                {/* add image */}
                </p><div className="bigbr"></div>
                <h3>Tic Tac Toe</h3>
                    <div>
                        <div className="game"
                        src={Game} > </div>
                    </div>
            </div>
        );
    }
}

export default Projects;