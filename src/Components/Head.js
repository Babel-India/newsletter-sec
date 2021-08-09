import React from "react";
import {Container, Row, Carousel } from 'react-bootstrap';
import './Styles/Head.css'

const head = () => {
    return(
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={ require("../Images/Head/bgi1.jpg").default }
      alt=""
    />
    <Carousel.Caption>
      <h3 className="news-name" >Keywords India Scoop</h3>
      <p className="greetings" >Hello, Namaste, Sata srī akāla, Bonjour, Hallo, Hola Babel Family Welcome to one and only Babel News Platform!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={ require("../Images/Head/bgi2.jpg").default }
      alt="kwsbg"
    />
    <Carousel.Caption>
    <h3 className="news-name" >Keywords India Scoop</h3>
      <p className="greetings" >Hello, Namaste, Sata srī akāla, Bonjour, Hallo, Hola Babel Family Welcome to one and only Babel News Platform!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ require("../Images/Head/bgi3.jpg").default }
      alt="kwsbg"
    />
    <Carousel.Caption>
    <h3 className="news-name" >Keywords India Scoop</h3>
      <p className="greetings" >Hello, Namaste, Sata srī akāla, Bonjour, Hallo, Hola Babel Family Welcome to one and only Babel News Platform!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default head;