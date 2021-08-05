import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';

function MovieQuiz() {
    return(
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={4}>1. Paras Verma</Col>
                    <Col xs={12} md={4}>2.Rahat Pal </Col>
                    <Col xs={12} md={4}>3. Mannan Choudhary </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>4. Pradeep Immanuel Thomas</Col>
                    <Col xs={12} md={4}>5.  Prakhar Kumar  </Col>
                    <Col xs={12} md={4}>6.  Giridhar Raut  </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>7. R Sharath  </Col>
                    <Col xs={12} md={4}>8. Mohit Kumar Bhatnagar  </Col>
                    <Col xs={12} md={4}>9. Saurabh Bhatt  </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>10. Lalit Aswal</Col>
                    <Col xs={12} md={4}>11. Sumit Verma</Col>
                    <Col xs={12} md={4}>12. Vaishnavi Maroo</Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>13. Utkarsh Chauhan </Col>
                    <Col xs={12} md={4}>14. Shikhar </Col>
                    <Col xs={12} md={4}>15. Mohammad Zunaid </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>16. Harpal Cheema </Col>
                    <Col xs={12} md={4}>17. Amit Mudgal </Col>
                    <Col xs={12} md={4}>18. Mridul Baramwal </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>19. Siddharth Pandey </Col>
                    <Col xs={12} md={4}>20. Parit Kumar </Col>
                    
                </Row>
            </Container>
        </div>
    )
}
export default MovieQuiz;