import React from "react";
import { Container} from "react-bootstrap"
import "./Styles/Cricket.css"
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import { Row,Col } from "react-bootstrap";
import "./Styles/Games.css"

function Cricket() {
    return(
        <div>
            <h1 className='cricket-head'>Keywords India Cricket Tournament</h1>
            <h1 className='about-intro'>Keywords FQA Cricket tournament kicked off on Independence day.</h1>
            <Container fluid>
                <div className="match">
                    <h3 className='match-highlights'>Cricket Match Highlights</h3>
                   
                    
                    <Container>
                    <ListGroup variant="flush" >
                            
                             </ListGroup>
                             <ListGroup.Item ClassN>In first match Vinod Pati won the toss and asked Akshat Tripathi to bat first. 
                                </ListGroup.Item>
                                <ListGroup.Item>With great batting show from Akash Varshney (83 in 46 balls) and small contribution from Akshat, Harpal and Rahul Solanki, batting team scored 201/5 in 20 overs.</ListGroup.Item>
                                <ListGroup.Item>Chasing a target of more than 200 was not to be very easy for the chasing team and opening spell from Rahul Solanki and off spin from Harshit (4 wickets) made it nearly impossible task.
                                </ListGroup.Item>
                                <ListGroup.Item>Vinod Pati and Karan Sharma showed some resistance but it was not enough for the team.
                                </ListGroup.Item>
                                <ListGroup.Item>In the end, Babel storm won the match comfortably.
                                </ListGroup.Item>  
                                <Image  className="sports_image"   src={ require("../Images/Games/Scoreboard.png").default }   />             
                                <Container>
                                
                                 </Container>
                               </Container>
                   
                    

                    
                </div>
            </Container>
        </div>
    )
}

export default Cricket;