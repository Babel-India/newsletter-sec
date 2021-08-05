import React from "react"
import "./Styles/Games.css"
import Video from "../Images/Team/Triumphant.mp4";
import { Container, Col, Row } from "react-bootstrap";

const Team = () => {
    return(
        <div>
            <h1 className='team-head'>Triumphant</h1>
            <video src={Video} controls='controls' width='30%' height='15%' className='video' />
            <h2 className="team-intro" >Welcome to Team</h2>
            <Container fluid>
            <Row className='bstc-winner'>
                    <Col>
                        <img alt='Lalit' className='winner-img' src={ require("../Images/Team/Lalit.png").default } />
                        <h3 className='bstc-name'>Lalit Aswal</h3>
                        
                    </Col>
                    <Col>
                        <img alt='Neha' className='winner-img' src={require('../Images/Team/Neha.png').default} />
                        <h3 className='bstc-name'>Neha Bhatt</h3>
                        
                    </Col>
                    <Col>
                        <img alt='Sushree' className='winner-img' src={require('../Images/Team/Sushree.png').default} />
                        <h3 className='bstc-name'>Sushree Ray</h3>
                    </Col>
                </Row>
                <Row className='bstc-winner'>
                <Col>
                        <img alt='Giridhar' className='winner-img' src={require('../Images/Team/Giridhar.png').default} />
                        <h3 className='bstc-name'>Giridhar Raut</h3>
                    </Col>
                    <Col>
                        <img alt='Nishant' className='winner-img' src={require('../Images/Team/Nishant.png').default} />
                        <h3 className='bstc-name'>Nishant Gupta</h3>
                        
                    </Col>
                    <Col>
                        <img alt='Dev' className='winner-img' src={require('../Images/Team/Dev.png').default} />
                        <h3 className='bstc-name'>Dev chadha</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team;