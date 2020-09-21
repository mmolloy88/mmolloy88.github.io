import React, { Component } from "react";
 
class Resume extends Component {
  render() {
    return (
      <div>

        <h3> Resume of Matthew Molloy </h3>
        <h4><br/>
          Contact details:
        <br/>
          Mobile: 0450 506 081 <br/>
          E-mail: mmolloy88@outlook.com <br/>
          Linkedin: <a 
            href="https://www.linkedin.com/in/wearematt88/">
            https://www.linkedin.com/in/wearematt88/
            </a> <br/>
        
        <hr/>
          Career Objective: To find employment and grow my skills as a Web Developer.
       <br/><br/>
       </h4>
       <h4>Employment and Study history:</h4>
       <br/>
        <h5>
          August - September 2020: Internship with Special Broadcasting Service (SBS) 
        </h5>
        <ul className="skilllist">
          <li>Typescript React</li>
          <li>Adobe Target</li>
          <li>Material UI</li>
          <li>Git Bucket</li>
          <li>Large scale Component integration</li>
        </ul>

        <h5>February - August 2020: Full-time student at Coder Academy<br/>
          Diploma of Information Technology</h5> 
        <ul className="skilllist">
          <li>Ruby and Rails integration</li>
          <li>HTML and CSS</li>
          <li>Javascript</li>
          <li>React and NodeJS</li>
          <li>Structured Query Language</li>
          <li>Troubleshooting</li>
          <li>Testing</li>
          <li>Git Collaboration</li>
          <li>Discrete Math:
          Bases, Boolean, Logic, Big O notation</li>
        </ul>

       <hr/>
       <br/><br/>
       <h5>March 2017 - February 2020: Yes Optus Barangaroo <br/>
       Business Specialist</h5> 
              <ul className="skilllist">
               <li>Staff management</li>
               <li>Mobile software troubleshooting</li>
               <li>Stock control</li>
               <li>Conflict resolution</li>
              </ul>
       <br/><hr/>
       <h5>March 2016 – October 2016: Huawei Retail Kiosk (BSI Contracting)</h5>    
          <ul className="skilllist">
              <li>Customer service rep</li>
              <li>Mobile technology and comparison</li>
              <li>Managing business relationships</li>
              <li>Creating rosters</li>
              <li>Product training</li>
          </ul>
       <hr/>
       
       <h5>2015 – December 2015: Officeworks Call Centre (National Workforce)
       Customer Service Rep</h5>
          <ul className="skilllist"> 
              <li>Telephony and online customer service </li>
              <li>Inter-office communications</li>
              <li>Tracking and placing orders, both online and over the phone</li>
              <li>Processing refunds</li>
          </ul>
       <hr/>
       
       <h5>2013 - December 2014: North Sydney Community Centre
       After School Care Volunteer</h5>
          <ul className="skilllist">
              <li>Setting up for activities and night classes</li>
              <li>Assisting carers throughout the afternoon</li>
              <li>Food prep</li>
          </ul>
       <hr/>

       <h5>2005 - December 2012: McDonalds, Lane Cove West
       Trainee Manager</h5>
          <ul className="skilllist">
              <li>OHS (heavy lifting, FIFO, hazard analysis)</li>
              <li>Balancing safe</li>
              <li>Customer service</li>
              <li>Inventory management</li>
              <li>POS</li>
              <li>Cash handling</li>
          </ul>
       <hr/>
       
       <h4>Previous Education:</h4>
       <h5>McDonalds Australia</h5><br/>
       2012 - 2013: Retail, Certificate III
       
       <h5>Marist College North Shore</h5><br/>
       2001 – 2006: HSC
       <br></br>
       <br></br>
       <hr/>
       
       <h5> Interests and hobbies:</h5><br/>
       
          Rock and metal music, Magic the Gathering, driving, video games and comics.
      </div>
    );
  }
}
 
export default Resume;