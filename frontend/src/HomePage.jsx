import React from "react";
import { Button, Container, Row, Col, Carousel } from "react-bootstrap";
import './App.css'

const HomePage = () => {
  return (
    <div id="home">

      {/* Main Layout */}
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={3} className="d-none d-md-block border-end p-5 ml-3">
            <h5 className="mb-3">Categories</h5>
            <ul className="list-unstyled">
              {[
                "Motivation",
                "Business & Finance",
                "Science/Tech",
                "Educational/Academic",
                "Health & Fitness",
                "Romance",
                "Historical",
                "Life Changing",
                "Self-Help",
                "Religious Books"
              ].map((category, index) => (
                <li key={index} className="mb-3 mx-4 effect">
                  <a href="#" className="text-dark text-decoration-none">{category}</a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Carousel Section */}
          <Col md={9} className="p-4">
            <Carousel className="custom-carousel">
              <Carousel.Item>
                <div
                  className="text-white text-center p-5 custom-carousel-item"
                  style={{ backgroundImage: "url('https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg?t=st=1741456588~exp=1741460188~hmac=d28e7ddf8162db255d56a89fea9f4f620514f5680742062987f73ac4cf81479e&w=1380')", height: "500px", backgroundSize: "cover", backgroundPosition: "center" }}
                >

                  <div className="content-image">
                    <h6>All type life changing book</h6>
                    <h2>Up to 10% off Voucher</h2>
                    <Button variant="light" className="mt-3">Shop Now →</Button>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  className="text-white text-center p-5 custom-carousel-item"
                  style={{ backgroundImage: "url('https://img.freepik.com/free-photo/paper-education-information-university-text_1150-1616.jpg?t=st=1741456642~exp=1741460242~hmac=07e4a9c4d6a787cec0fa3f187d938336a338e30e151676251ee82c2464c50f60&w=1380')", height: "500px", backgroundSize: "cover", backgroundPosition: "center" }}
                >
                  <div className="content-image">
                    <h6>Explore Bestsellers</h6>
                    <h2>Limited Time Offers</h2>
                    <Button variant="dark" className="mt-3">Shop Now →</Button>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>


        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
