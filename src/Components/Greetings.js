import React from 'react';
import './Greetings.css';
import {HashLink as Link} from 'react-router-hash-link';
import emoji from "react-easy-emoji";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas)


function Greetings() {
    return (
        <div className="greetings">
            <div className="Left">
                <h1 className="content">Hi all, I'm Pranav
                <span className="wave-emoji">{emoji("👋")}</span>
                </h1>
                <p>
                A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries. Currently learning React Native to expand my knowledge in mobile app development.
                </p>

                <div className="contactContainer">
            <ul className="contact_icon">
            <li className="contactSymbol"><a href="https://github.com/Pranavan-1803" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="2x"/></a>
                    </li>
                    <li className="contactSymbol"><a href="https://www.linkedin.com/in/pranavan-a-26b900110" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/></a>
                    </li>
                    <li className="contactSymbol"><a href="mailto: apranavan@gmail.com" target="_blank"><FontAwesomeIcon icon={['fab', 'google']} size="2x"/></a>
                    </li>
                    <li className="contactSymbol"><a href="https://gitlab.com/Pranavan-1803" target="_blank"><FontAwesomeIcon icon={['fab', 'gitlab']} size="2x"/></a>
                    </li>
                    <li className="contactSymbol"><a href="https://www.instagram.com/invites/contact/?i=1v6a03w6tc1na&utm_content=pn9497" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/></a>
                    </li>
                    <li className="contactSymbol"><a href="https://stackoverflow.com/users/15131564/pranavan-a" target="_blank"><FontAwesomeIcon icon={['fab', 'stack-overflow']} size="2x"/></a>
                    </li>
            </ul>
            </div>

                <Link smooth to="#Contact" rel="noreferrer">
                <button>Contact Me</button>
                </Link>
                <a href="https://we.tl/t-atNUaXI3Dj" target="_blank" rel="noreferrer">
                <button>Check My Resume</button>
                </a>
            </div>

            <div className="Right">
            <img
            alt="Hello Gif"
            src="https://media2.giphy.com/media/xUyrMCdgrOL3ntbTvK/giphy.gif" />
            </div>
        </div>
    )
}

export default Greetings
