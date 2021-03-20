import React from 'react';
import './Projects.css';
import Amzn from '../Images/Amzn.JPG'
import Portfolio from '../Images/Portfolio.JPG';
import Tinder from '../Images/Tinder.JPG';

function Projects() {
    return (
        <div className='Proj' >
         <h1 id="Projects">Things I did!</h1>
            <div className="projects">
                <a className="link" href="#">
                <img src={Portfolio} alt="Portfolio"></img>
                <div className="details">
                    <h3>💼 My Portfolio website</h3>
                    <p>👨🏻‍💻 Its the one we are landed in. I created this to express myself digitally</p>
                    <p>⚙️ Made with React and some NPM</p>
                </div></a>

                <a className="link" href='javascript:;'>
                    <img src={Amzn} alt="amazon"></img>
                    <div className="details">
                    <h3>💼 Amazon Clone</h3>
                    <p>🛒 Created Amazon clone to learn fullstack development</p>
                    <p>⚙️ Made with React/Express/Stripe/Firebase Authentication</p>
                    </div></a>

                <a className="link" href='javascript:;'>
                <img src={Tinder}alt="tinder"></img>
                    <div className="details">
                    <h3>💼 Tiner Clone</h3>
                    <p>💙 Created Tinder clone to learn different features</p>
                    <p>⚙️ Made with React/some NPM/MongoDB/Server communication</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Projects
