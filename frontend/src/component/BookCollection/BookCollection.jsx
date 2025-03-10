import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { assets } from "../../image/assets";
import './BookCollection.css'

const books = [
  {
    id: 1,
    title: "West Bengal SET",
    subtitle: "PlayStation",
    description: "Black and White Version of the coming out in 2024.",
    image: `${assets.largebook1}`,
    isLarge: true,
  },

  {
    id: 3,
    title: "IKIGAI",
    description: "Amazing Life-Changing Book",
    image: `${assets.largebook3}`,
  },
  {
    id: 4,
    title: "Life Science",
    description: "CSIR UGC NET / JRF",
    image: `${assets.largebook4}`,
  },
];

const BookCollection = () => {
  return (
    <Container className="py-5">

      <div className="d-flex align-items-center gap-2 mb-3">
        <img src={assets.rectangle} alt="" />
        <h5 className="text-danger">Featured</h5>
      </div>
        <h1 className="mb-4">New Arrival</h1>
      <Row className="g-4">
        {books.map((book, index) => (
          <Col key={index} md={4} sm={12}>
            <Card className="book-card d-block align-items-center flex-column ">
              <Card.Img src={book.image} className="book-img" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                <Card.Title className="fw-bold text-danger" variant="black">{book.title}</Card.Title>
                {book.subtitle && <Card.Subtitle className="text-dange">{book.subtitle}</Card.Subtitle>}
                <Card.Text className="text-dange">{book.description}</Card.Text>
                <Button variant="light" size="sm" className="bg-danger">Shop Now</Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookCollection;
