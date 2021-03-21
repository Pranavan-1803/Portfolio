import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import myImg from '../Images/Pranav1.jpg';

library.add(fab, fas)

function Contact() {
    return (
        <div>
        <div className="contactContainer">
            <div className="left1">
                <div className="contact" id="Contact">
                    <h1>Reach Out to Me!</h1>
                    <p>COLLAB A PROJECT OR JUST WANT TO SAY HI? FEEL FREE TO INBOX ME.</p>
                    <p>📍 Chennai, Tamilnadu</p>
                </div>
                <div className="contactContainer2">
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
            </div>
            <div className="right1">
                <img className="MyImg" src={myImg}></img>
            </div>
        </div>
        <div className="thankyou">
            <p>Thats the end of story! Thank You...</p>
        </div>
        </div>
    )
}

export default Contact
