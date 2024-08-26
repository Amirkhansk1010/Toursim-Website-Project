import React from 'react'
import './NewLetter.css'

import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

function NewsLetter() {
  return (
    <section className="newsletter">
        <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful traveling information.</h2>
                    <div className="newsletter__input">
                        <input type='email' placeholder='Enter your email' />
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>
                    To access comprehensive tourism information about Jaipur, Rajasthan, India, simply drop us an email at <mark>jaipurtourism302002@gmail.com</mark>. Our dedicated team will promptly provide you with details on attractions, accommodations, cultural experiences, and more, ensuring you make the most of your visit to the vibrant Pink City.
                    </p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt='' />
                </div>
            </Col>
        </Row>
        </Container>
    </section>
  )
}

export default NewsLetter
