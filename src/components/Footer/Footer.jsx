import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';
import Header from '../Header/Header';


const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className='footer__logo text-start'>
              <img src={logo} alt='logo' />
              <h5>Foodie</h5>
              <p>
                Fast and easy food delivery service to spoil the foodie within
                you.
              </p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Monday - Thursday</span>
                <p>10:00am - 9:00pm</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Sunday</span>
                <p>11 :00am - 11:00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Location: 123 new, delhi, FIR</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Call Line : +123 4567 890</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: contact@foodie.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Newsletter</h5>
            <p>Subcribe our newsletter</p>
            <form action="https://getform.io/f/d95619c6-eefd-44d7-8017-c55da000f0d2"
              method="POST">
            
            <input className='new-in-put' type='name' placeholder='Enter your name'
              ></input>
              <input className='new-in-put' type='email' placeholder='Enter your email'
              ></input>
              <div><button className='new-btn-mit'>Submit</button></div>
              
          
            
            </form>
            
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright__text'>
              Copyright - 2023, made by food bio, under guidance from nandhakumar
            </p>
          </Col>
          <Col lg='6' md='6'>
            <div className='social__links d-flex align-items-center gap-4 justify-content-end'>
              <p className='m-0'>Follow us: </p>
              <span>
                <Link to='https://www.facebook.com/tramngoc1999'>
                  <i className='ri-facebook-circle-fill' onClick={Footer}></i>
                </Link>
              </span>
              <span>
                <Link to='https://github.com/tramnguyenhere'>
                  <i className='ri-github-fill' onClick={Header}></i>
                </Link>
              </span>
              <span>
                <Link to='https://www.linkedin.com/in/tramnguyenhere/'>
                  <i className='ri-linkedin-box-fill' onClick={Header}></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
