import React from 'react';
import {Container} from 'react-bootstrap';
import "./Styles/Head.css"

const About = () => {
    return(
        <div className='abt'>
            <h1 className='about-head'>About Us</h1>
             <Container className='about'>
            <div>
                 <img className='controller' src={ require("../Images/Head/controller.png").default } alt='controller' />
                 <img className='controller1' src={ require("../Images/Head/controller.png").default } alt='controller' />
                <h1 className='about-intro'>Read not the Times, read the Eternities.</h1>
                
                <h3 className='about-des'>
                Diving into the happenings at keywords India.. Every member in this family is talented and unique but some brought glory and pride in this team. Lets get a sight of past (recent events), present (ongoing things) and future (our vision, our plans)
                </h3>

            </div>
        </Container>
        </div>
       
    )
}

export default About;