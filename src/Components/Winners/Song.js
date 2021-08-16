import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';

function Song() {
    return(
        <div>
            <Container>
            <Row>
                    <Col xs={12} md={4}>1. Giridhar Raut</Col>
                    <Col xs={12} md={4}>2. Nishchay Bhatia</Col>
                    <Col xs={12} md={4}>3. Tarun Thusu  </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>4. Rohit Jain </Col>
                    <Col xs={12} md={4}>5. Himanshu Prashar </Col>
                    <Col xs={12} md={4}>6.  Krishna Dhingra</Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>7. Rishav Kumar </Col>
                    <Col xs={12} md={4}>8. Ritik Yadav</Col>
                    <Col xs={12} md={4}>9. Saurabh Bhatt   </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>10. Abhishek Uppal  </Col>
                    <Col xs={12} md={4}>11. Chetanshu Sharma </Col>
                    <Col xs={12} md={4}>12. Shashi Sharma</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Song;