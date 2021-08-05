import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';

function Song() {
    return(
        <div>
            <Container>
            <Row>
                    <Col xs={12} md={4}>1. Giridhar Raut - Eustace Bagge   </Col>
                    <Col xs={12} md={4}>2. Nishchay Bhatia - nikolaj    </Col>
                    <Col xs={12} md={4}>3. Tarun Thusu - professor utonium    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>4. Rohit Jain - Fear o missing out of work   </Col>
                    <Col xs={12} md={4}>5. Himanshu Prashar - ed edd eddie     </Col>
                    <Col xs={12} md={4}>6.  Krishna Dhingra - Cinderella Law    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>7. Rishav Kumar Dr. Hienz Doofenshmirtz    </Col>
                    <Col xs={12} md={4}>8. Ritik Yadav - Nagini     </Col>
                    <Col xs={12} md={4}>9. Saurabh Bhatt - 2.7 billion    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>10. Abhishek Uppal - patrick  </Col>
                    <Col xs={12} md={4}>11. Chetanshu Sharma – True</Col>
                    <Col xs={12} md={4}>12. Shashi Sharma - Avada Kedavra</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Song;