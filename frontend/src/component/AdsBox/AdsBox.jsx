import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./AdsBox.css";
import { assets } from '../../image/assets'; // Adjust based on your assets path

const AdsBox = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, days, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              days = days > 0 ? days - 1 : 0;
            }
          }
        }

        return { hours, days, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container  className="reading-experience-section mt-5">
      <Row className="align-items-center justify-content-between">
        {/* Left Side Content */}
        <Col md={6} className="text-white p-5">
          <span className="category-badge">Categories</span>
          <h1 className="fw-bold">Enhance Your <br /> Reading Experience</h1>

          {/* Countdown Timer */}
          <div className="countdown d-flex gap-3 mt-3">
            <div className="time-box">
              <span>{String(timeLeft.hours).padStart(2, "0")}</span>
              <p>Hours</p>
            </div>
            <div className="time-box">
              <span>{String(timeLeft.days).padStart(2, "0")}</span>
              <p>Days</p>
            </div>
            <div className="time-box">
              <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
              <p>Minutes</p>
            </div>
            <div className="time-box">
              <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
              <p>Seconds</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-4">
            <Button className="btn-buy">Buy Now!</Button>
            <Button className="btn-rent ms-3">Rent Now</Button>
          </div>
        </Col>

        {/* Right Side Image */}
        <Col md={6} className="d-flex justify-content-center">
          <div className="image-container">
            <img src={assets.light} alt="Light Background" className="light-bg" />
            <img src={assets.books}alt="Books" className="books-img" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdsBox;
