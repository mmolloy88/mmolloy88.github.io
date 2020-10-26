import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div className="padbox">
        <h1>Matthew Molloy</h1>
        <h4>
          mmolloy88@outlook.com |{" "}
          <a className="link" href="https://twitter.com/wearematt88">
            LinkedIn
          </a>{" "}
        </h4>
        <hr />
        <br />

        <div className="mission">
          <p>
            Aspiring Web developer with a background in Telecommunications and
            customer service, whose skills reflected resilience and leadership;
            looking to find employment and grow my skills in a programming
            environment.
          </p>
        </div>

        <h3> Employment and Study history: </h3>

        <h4>
          Special Broadcasting Service (SBS)
          <span className="dateright">Aug - Sep 2020 </span>
        </h4>
        <h5>Internship</h5>

        <ul className="skilllist">
          <li>Typescript React</li>
          <li>Adobe Target</li>
          <li>Material UI</li>
          <li>Git Bucket</li>
          <li>Large scale Component integration</li>
        </ul>

        <h4>
          Coder Academy
          <span className="dateright">Feb - Aug 2020</span>
        </h4>

        <h5>Diploma of Information Technology </h5>

        <ul className="skilllist">
          <li>Ruby and Rails integration</li>
          <li>HTML and CSS</li>
          <li>Javascript</li>
          <li>React and NodeJS</li>
          <li>Structured Query Language</li>
          <li>Troubleshooting</li>
          <li>Testing</li>
          <li>Git Collaboration</li>
          <li>Discrete Math: Bases, Boolean, Logic, Big O notation</li>
        </ul>

        <h3>Projects: </h3>

        <div className="ind">
          <h4>
            March 2020: Terminal Diary -{" "}
            <a
              className="link"
              href="https://github.com/mmolloy88/terminal-app1"
            >
              {" "}
              github repo{" "}
            </a>{" "}
          </h4>
          <p>
            Written after one month at Coder Academy as my first project. This
            was created to demonstrate my understanding of Ruby as the first
            coding language I learned, the app utilises 4 gems and was developed
            within a week.
          </p>
          <h4>
            May 2020: Second Hand Magic -{" "}
            <a
              className="link"
              href="https://github.com/mmolloy88/rails-template"
            >
              {" "}
              github repo
            </a>{" "}
          </h4>
          <p>
            After developing an understanding for Ruby, Html and CSS and
            creating an initial portfolio website, I moved to learn Rails as
            well as back end implementation using PostgreSQL. For this project I
            decided to develop a two way marketplace where users could sell
            their second hand Magic the Gathering cards.
          </p>
          <h4>
            July 2020: updated portfolio site -{" "}
            <a className="link" href="https://wearematt88.netlify.app/">
              {" "}
              Portfolio site
            </a>{" "}
          </h4>
          <p>
            Towards the end of my course I decided to take another attempt at
            creating a portfolio website, utilising all the skills I had picked
            up learning JavaScript. The site was created using React and is a
            single page application that also showcases my increased
            understanding of HTML and CSS.
          </p>
        </div>
        <br className="bigbr" />

        <h4>
          Yes Optus Barangaroo
          <span className="dateright">Mar 2017 - Feb 2020 </span>
        </h4>
        <h5>Business Specialist</h5>

        <ul className="skilllist">
          <li>Staff Management</li>
          <li>Mobile software troubleshooting</li>
          <li>Stock control</li>
          <li>Conflict resolution</li>
          <li>Telephony and online customer service</li>
          <li>Inter office communications</li>
          <li>tracking and placing orders</li>
          <li>Product training</li>
        </ul>

        <h4>
          Various customer service roles
          <span className="dateright">2005 - 2016 </span>
        </h4>
        <p>
          Huawei Retail Kiosk, Officeworks Call Centre, North Sydney Community
          Centre, McDonalds Lane Cove.
        </p>
        <br className="bigbr" />
        <hr />
      </div>
    );
  }
}

export default Resume;
