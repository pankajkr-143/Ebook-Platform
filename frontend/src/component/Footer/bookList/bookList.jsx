import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";
import { assets } from "../../../image/assets";
import './bookList.css'
// Adjust based on your asset path

const books = [
  { id: 1, title: "Because Life is a Gift", price: 260, originalPrice: 360, rating: 5, reviews: 65, image: assets.book1 },
  { id: 2, title: "What Are You Doing With Your Life?", price: 960, originalPrice: 1160, rating: 4, reviews: 65, image: assets.book2 },
  { id: 3, title: "Unknown Book", price: 160, originalPrice: 170, rating: 4.5, reviews: 65, image: assets.book3 },
  { id: 4, title: "Book Cover Back", price: 360, originalPrice: null, rating: 5, reviews: 65, image: assets.book4 },
];

const BookList = () => {
  return (
    <Container className="mt-4">
      <div className="d-flex align-items-center gap-2 mb-3">
              <img src={assets.rectangle} alt="" />
              <h5 className="text-danger">This month</h5>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-5 ">
        <h2>Best Selling Products</h2>
          <Button className="bg-danger border-0">Veiw All</Button>
        </div>
      <Row className="justify-content-center">
        {books.map((book) => (
          <Col key={book.id} md={3} sm={6} xs={12} className="mb-3">
            <Card className="text-center p-3 border-0 shadow-sm position-relative">
              {/* Wishlist & View Icons */}
              <div className="position-absolute top-0 end-0 p-2 d-flex gap-4 flex-column">
                <FaHeart className="text-secondary cursor-pointer" />
                <FaEye className="text-secondary cursor-pointer" />
              </div>
              
              {/* Book Image */}
              <Card.Img
                variant="top"
                src={book.image}
                alt={book.title}
                className="book-img"
              />

              {/* Book Details */}
              <Card.Body>
                <p className="mb-1 text-muted">Book</p>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <span className="text-danger fw-bold">${book.price}</span>
                  {book.originalPrice && (
                    <span className="text-muted text-decoration-line-through">${book.originalPrice}</span>
                  )}
                </div>
                
                {/* Star Ratings */}
                <div>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color={i < book.rating ? "#ffc107" : "#e4e5e9"} />
                  ))}
                  <small className="ms-2">({book.reviews})</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
