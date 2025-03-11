import React from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import './Footer.css'
const footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4">
          {/* BookByRent - Subscription Section */}
          <Col md={3}>
            <h5 className="footer-title">BookByRent</h5>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <InputGroup>
              <Form.Control type="email" placeholder="Enter your email" />
              <InputGroup.Text>
                <FaPaperPlane />
              </InputGroup.Text>
            </InputGroup>
          </Col>

          {/* Support Section */}
          <Col md={3}>
            <h5 className="footer-title">Support</h5>
            <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </Col>

          {/* Account Section */}
          <Col md={2}>
            <h5 className="footer-title">Account</h5>
            <p><a href="#">My Account</a></p>
            <p><a href="#">Login / Register</a></p>
            <p><a href="#">Cart</a></p>
            <p><a href="#">Wishlist</a></p>
            <p><a href="#">Shop</a></p>
          </Col>

          {/* Quick Links Section */}
          <Col md={2}>
            <h5 className="footer-title">Quick Link</h5>
            <p><a href="#">Privacy Policy</a></p>
            <p><a href="#">Terms Of Use</a></p>
            <p><a href="#">FAQ</a></p>
            <p><a href="#">Contact</a></p>
          </Col>

          {/* Download App Section */}
          <Col md={2}>
            <h5 className="footer-title">Download App</h5>
            <p>Save $3 with App New User Only</p>
            <img src="qr-code.png" alt="QR Code" width="80" className="mb-2" />
            <p>
              <img src="google-play.png" alt="Google Play" width="100" />
              <img src="app-store.png" alt="App Store" width="100" />
            </p>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <hr className="my-4" />
        <p className="text-center">© Copyright Rimel 2022. All rights reserved</p>
      </Container>
    </footer>
  );
};

export default footer;
