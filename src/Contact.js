import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  
  faTwitter,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
 
export default function SocialFollow() {
  return (
    <div className="socbox"> 
      <div class="social-container">
        <h4>Social Media Links: </h4>
        <a href="https://twitter.com/wearematt88"
          className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://github.com/mmolloy88"
          className="Github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/wearematt88/"
          className="linkedin social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div> 
  );
}
 