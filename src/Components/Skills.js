import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas)



function Skills() {
    return (
        <div className="skills" id="Skills">
            <div className="SRight">
                <h1>What I do</h1>
                <p>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
                <div className="skillContainer">
                    <ul className="dev_icon">
                        <li className="inline"><a href="javascript:;"><FontAwesomeIcon icon={['fab', 'html5']} size="2x"/><p>HTML5</p></a></li>
                        <li className="inline"><a href="javascript:;"><FontAwesomeIcon icon={['fab', 'css3']} size="2x"/><p>CSS3</p></a></li>
                        <li className="inline"><a href="javascript:;"><FontAwesomeIcon icon={['fab', 'js']} size="2x"/><p>JavaScript</p></a></li>
                        <li className="inline"><a href="javascript:;"><FontAwesomeIcon icon={['fab', 'react']} size="2x"/><p>React</p></a></li>
                        <li className="inline"><a href="javascript:;"><FontAwesomeIcon icon={['fab', 'node']} size="2x"/><p>Node</p></a></li>
                        <li className="inline"><a href="javascript:;"><FontAwesomeIcon icon={['fab', 'npm']} size="2x"/><p>NPM</p></a></li>
                        <li className="inline"><a href="javascript:;"><FontAwesomeIcon icon={['fas', 'fire']} size="2x"/><p>FireBase</p></a></li>
                        <li className="inline"><a href="javascript:;"><FontAwesomeIcon icon={['fas', 'database']} size="2x"/><p>MongoDB</p></a></li>
                        <li className="inline"><a href="javascript:;"><FontAwesomeIcon icon={['fas', 'camera']} size="2x"/><p>PS/Illustrator</p></a></li>
                        <li className="inline"><a href="javascript:;"><FontAwesomeIcon icon={['fab', 'github']} size="2x"/><p>GitHub</p></a></li>
                        <li className="inline"><a href="javascript:;"><FontAwesomeIcon icon={['fab', 'stripe']} size="2x"/><p>Stripe</p></a></li>
                        <li className="inline"><a href="javascript:;"><FontAwesomeIcon icon={['fas', 'server']} size="2x"/><p>Express</p></a></li>

                    </ul>
                </div>
                <div className="skillPara">
                    <p><img src="https://twemoji.maxcdn.com/2/72x72/26a1.png" alt="light" width="15" height="15"></img>
                      Develop highly interactive Front end / User Interfaces for your web applications.
                    </p>

                    <p><img src="https://twemoji.maxcdn.com/2/72x72/26a1.png" alt="light" width="15" height="15"></img>
                        Integration of third party services such as Firebase/ MongoDB/ Stripe and so on.
                    </p>


                </div>
            </div>
            <div className="SLeft">
            <img
            alt="Hello Gif"
            src="https://data.whicdn.com/images/101787987/original.gif" />
            </div>
        </div>
    )
}

export default Skills
