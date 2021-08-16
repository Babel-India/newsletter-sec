import React from "react";
import { Container} from "react-bootstrap"
import "./Styles/Cricket.css"

function Cricket() {
    return(
        <div>
            <h1 className='cricket-head'>Keywords India Cricket Tournament</h1>
            <h1 className='about-intro'>Keywords FQA Cricket tournament kicked off on Independence day.</h1>
            <Container fluid>
                <div className="match">
                    <h3 className='match-highlights'>Cricket Match Highlights</h3>
                    <ul className="list">
                        <li>In first match Vinod Pati won the toss and asked Akshat Tripathi to bat first.</li>
                        <li>With great batting show from Akash Varshney (83 in 46 balls) and small contribution from Akshat, Harpal and Rahul Solanki, batting team scored 201/5 in 20 overs.</li>
                        <li>Chasing a target of more than 200 was not to be very easy for the chasing team and opening spell from Rahul Solanki and off spin from Harshit (4 wickets) made it nearly impossible task.</li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Cricket;