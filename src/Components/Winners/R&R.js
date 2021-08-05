import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';

function Fillgap() {
    return(
        <div>
            <Container>
            <Row>
                    <Col xs={12} md={4}>1. Sushree Ray </Col>
                    <Col xs={12} md={4}>2. Niket Sharma   </Col>
                    <Col xs={12} md={4}>3. Amit Chauhan     </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>4. Harpal Cheema   </Col>
                    <Col xs={12} md={4}>5. Siddharth Pandey     </Col>
                    <Col xs={12} md={4}>6. Aman Bedi    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>7. Akshay Sharma     </Col>
                    <Col xs={12} md={4}>8. Shilpi Verma   </Col>
                    <Col xs={12} md={4}>9. Mayank Lal  </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>10. Abhishek1 Singh  </Col>
                    <Col xs={12} md={4}></Col>
                    <Col xs={12} md={4}></Col>
                </Row>
                {/* <Row>
                    <Col xs={12} md={4}>13. R Sharath </Col>
                    <Col xs={12} md={4}>14. Rahat Pal</Col>
                    <Col xs={12} md={4}>15. Siddharth Bhatt </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>16. Saurabh Bhatt </Col>
                    <Col xs={12} md={4}>17. Shikhar Sharma </Col>
                    <Col xs={12} md={4}>18. Sumit Verma </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>19. Sushree Ray </Col>
                    <Col xs={12} md={4}>20. Vaishnavi Maroo</Col>
                    <Col xs={12} md={4}></Col>
                </Row> */}
            </Container>
        </div>
    )
}

export default Fillgap;