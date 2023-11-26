import {Container,  Col, Row } from "react-bootstrap";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import logo from '../assets/img/download.png';

export const Footer = () => {
    return (
        <footer className="footer">
        <Container>
        <Row className="align-item-center">
            
            <Col  className="footer-logo"   sm={6}>
                <img src={logo} alt="Logo" />           
            </Col>
            
            
           
            <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/sagar-giri23/" target="_blank" > <img src={navIcon1} alt="linkedin"/></a>
                <a href="https://www.facebook.com/Ocean.Sagar.Giri.75491856/" target="_blank" > <img src={navIcon2} alt="Facebook"/></a>
                <a href="https://www.instagram.com/ocean_giri23/" target="_blank" > <img src={navIcon3} alt="Instagram"/></a>
                <a href="https://github.com/oceangiri23" target="_blank" > <img src={navIcon4} alt="Github"/></a>
            </div>
            </Col>
            <p>&#169; <b>Sagar Giri</b>. All Rights Reserved</p>
            
        </Row>
        </Container>
        </footer>
    )
}