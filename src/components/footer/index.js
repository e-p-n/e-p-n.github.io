import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
            <footer>

            {/* Linkedin */}
            <a className="icons" href="https://www.linkedin.com/in/eric-normann-b8a4991b2/" role="button" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>

            {/* Github */}
            <a className="icons" href="https://github.com/e-p-n" role="button" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>

            {/*Twitter*/}
            {/*a className="btn btn-outline-dark btn-floating rounded-circle m-1 site-link" href="https://twitter.com/Eric_Gobsmact" role="button" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
            </a*/}

            {/* Email */}
            <a className="icons" href="mailto:eric.n@me.com" role="button" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />    
            </a>


        <div>
            &copy;&nbsp;2022:&nbsp;Eric&nbsp;Normann
        </div>

        </footer>
)   ;
}

export default Footer;