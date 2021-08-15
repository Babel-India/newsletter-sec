import React from 'react';
import "./Styles/EventWinners.css"
import {Container, Col, Row } from 'react-bootstrap';
import RepublicDayQuiz from './Winners/RepublicDayQuiz';
import MovieQuiz from "./Winners/MovieQuiz";
import FitnessChallenge from "./Winners/FitnessChallenge";
import SportsQuiz from "./Winners/SportsQuiz";
import PuzzleContest from "./Winners/PuzzleContest";
import Song from "./Winners/Song";
import Fillgap from "./Winners/R&R";
import Julyevents from './Winners/julyevents';
import SportsQuizjuly from './Winners/sportsquizjuly';
import AugustQuiz from './Winners/AugustQuiz';
function eventWinners() {
    return(
        <div className='events' id='event'>
            <div className='eventwin'>
                <h1>Event Winners</h1>
            </div>
            <p className="eventDesc">Tired and stressed out of executing daily task and testing? Don’t you worry, we got you covered. To keep our testers on the light mood, many small and big events are held at regular intervals where all the employees participate, laugh and have fun together. These events are generally hosted by our Beloved HR and the RECK team. During this pandemic time, where all are generally tied to their home for most of the time carrying out daily task, these events are the best stress busters. Here are some some events along with their winnner.</p>
            <hr className='eventLine' />
            
            <Container fluid>
            <h3 className='month'>May</h3>
                <Row>
                    <Col className="republicQuiz">
                         <div className="event-name">
                            <h5>Guess the Celebrities Quiz Winners</h5>
                            <p>Below are the winners of Guess the Celebrities.</p>
                         </div>
                         <RepublicDayQuiz />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
                <Row>
                    <Col className="republicQuiz">
                         <div className="event-name">
                            <h5> Quiz Winners</h5>
                         </div>
                         <MovieQuiz />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
                <Row>
                    <Col className="republicQuiz">
                         <div className="event-name">
                            <h5> EID Quiz:</h5>
                         </div>
                         <FitnessChallenge />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
                <Row>
                    <Col className="republicQuiz">
                         <div className="event-name">
                            <h5>R&R Event:</h5>
                        </div>
                         <SportsQuiz />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
                <Row>
                    <Col className="republicQuiz">
                         {/* <div>
                            <h5>Passing the Colour:</h5>
                            <p>
                              The Winners of this challenge  is Team3 lead by Pulkit Baghel
                            </p>
                        </div> */}
                         {/* <PuzzleContest /> */}
                    </Col>
                </Row>
     
                <h3 className='month'>June </h3>
                <Row>
                    <Col className="republicQuiz">
                        
                         <Song />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
                <Row>
                    <Col className="republicQuiz last">
                         <div className="event-name">
                            <h5>Winners for fill in the gap:</h5>
                        </div>
                         <Fillgap/>
                    </Col>
                </Row>
                <hr className='quizSeprator' />
                <h3 className='month'>July </h3>
                <Row>
                    <Col className="republicQuiz last">
                         <div className="event-name">
                            <h5>Quiz:</h5>
                        </div>
                         <Julyevents />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
                <Row>
                    <Col className="republicQuiz last">
                         <div className="event-name">
                            <h5>Sports Quiz Winners:</h5>
                        </div>
                         <SportsQuizjuly />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
                <h3 className='month'>August </h3>
                <Row>
                    <Col className="republicQuiz last">
                         <div className="event-name">
                            <h5> Independence Day Quiz Winners:</h5>
                        </div>
                         <AugustQuiz />
                         
                    </Col>
                </Row>
                


            </Container>
        </div>
    )
}
export default eventWinners;