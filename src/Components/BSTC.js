import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Styles/BSTC.css";
const BSTC = () => {
  return (
    <div id="BSTC" className='bstc'> 
            <h1 className='bstc-head'>Babel Software Testing Certification Champions</h1>
            <h3 className='bstc-intro'>There are always new, grander challenges to confront, and a true winner will embrace each one.</h3>
            <Container fluid>
                <Row className='bstc-winner'>
                    <Col>
                        <img alt='Achint' className='winner-img' src={ require("../Images/BSTC/Swastik.png").default } />
                        <h3 className='bstc-name'>Swastik Dhamija</h3>
                        <h5>Marks : 40</h5>
                    </Col>
                    <Col>
                        <img alt='Pushpankar' className='winner-img' src={require('../Images/BSTC/Pushpankar.png').default} />
                        <h3 className='bstc-name'>Pushpankar Kiran</h3>
                        <h5>Marks : 39</h5>
                    </Col>
                    <Col>
                        <img alt='Aastha' className='winner-img' src={require('../Images/BSTC/Aastha.png').default} />
                        <h3 className='bstc-name'>Aastha Dixit</h3>
                        <h5>Marks : 39</h5>
                    </Col>
                    <Col>
                        <img alt='Mukul' className='winner-img' src={require('../Images/BSTC/Mukul.png').default} />
                        <h3 className='bstc-name'>Mukul Singh</h3>
                        <h5>Marks : 37</h5>
                    </Col>
                </Row>
                <Row className='bstc-winner'>
                    
                    <Col>
                        <img alt='Upasana' className='winner-img' src={require('../Images/BSTC/Upasana.png').default} />
                        <h3 className='bstc-name'>Upasana Makkar</h3>
                        <h5>Marks : 36</h5>
                    </Col>
                    <Col>
                        <img alt='Giridhar' className='winner-img' src={require('../Images/BSTC/Giridhar.png').default} />
                        <h3 className='bstc-name'>Giridhar Raut</h3>
                        <h5>Marks : 35</h5>
                    </Col>
                    <Col>
                        <img alt='Shashi' className='winner-img' src={require('../Images/BSTC/Shashi.png').default} />
                        <h3 className='bstc-name'>Shashi Sharma</h3>
                        <h5>Marks : 35</h5>
                    </Col>
                    <Col>
                        <img alt='Rishab' className='winner-img' src={require('../Images/BSTC/Rishab.png').default} />
                        <h3 className='bstc-name'>Rishabh Kaushik</h3>
                        <h5>Marks : 35</h5>
                    </Col>
                </Row>
                <Row className='bstc-winner'>
                    <Col>
                        <img alt='Aman' className='winner-img' src={require('../Images/BSTC/Aman.png').default} />
                        <h3 className='bstc-name'>Aman Kumar Mishra</h3>
                        <h5>Marks : 34</h5>
                    </Col>
                    <Col>
                        <img alt='Rahul' className='winner-img' src={require('../Images/BSTC/Rahul.png').default} />
                        <h3 className='bstc-name'>Rahul Bisht</h3>
                        <h5>Marks : 33</h5>
                    </Col>
                    <Col>
                        <img alt='Vincent' className='winner-img' src={require('../Images/BSTC/Vincent.png').default} />
                        <h3 className='bstc-name'>Vincent Tudu</h3>
                        <h5>Marks : 33</h5>
                    </Col>
                    <Col>
                        
                        <h3 className='bstc-name'></h3>
                        <h5></h5>
                    </Col>
                </Row>
            </Container>
        </div>
  );
};

export default BSTC;
