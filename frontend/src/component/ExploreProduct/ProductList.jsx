import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaHeart, FaEye, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { assets } from "../../image/assets";

// Sample product data
const products = [
  {
    id: 1,
    title: "Book name",
    price: 100,
    image: `${assets.book1}`,
    reviews: 35,
    rating: 4,
    isNew: false,
    addToCart: true,
  },
  {
    id: 2,
    title: "Book name",
    price: 360,
    image:  `${assets.book1}`,
    reviews: 95,
    rating: 4.5,
    isNew: false,
    addToCart: true,
  },
  {
    id: 3,
    title: "Book name",
    price: 700,
    image:  `${assets.book1}`,
    reviews: 325,
    rating: 4,
    isNew: false,
    addToCart: true,
  },
  {
    id: 4,
    title: "Book name",
    price: 500,
    image:  `${assets.book1}`,
    reviews: 145,
    rating: 4,
    isNew: false,
    addToCart: true,
  },
  {
    id: 5,
    title: "Book name",
    price: 960,
    image:  `${assets.book1}`,
    reviews: 85,
    rating: 4,
    isNew: true,
    addToCart: true,
  },
  {
    id: 6,
    title: "Book name",
    price: 1160,
    image:  `${assets.book1}`,
    reviews: 35,
    rating: 3.5,
    isNew: false,
    addToCart: true,
  },
  {
    id: 7,
    title: "Book name",
    price: 660,
    image:  `${assets.book1}`,
    reviews: 55,
    rating: 4,
    isNew: true,
    addToCart: true,
  },
  {
    id: 8,
    title: "Book name",
    price: 660,
    image:  `${assets.book1}`,
    reviews: 55,
    rating: 4,
    isNew: false,
    addToCart: true,
  },
];

// Function to render stars based on rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="text-warning" />
      ))}
      {halfStar && <FaStarHalfAlt className="text-warning" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} className="text-warning" />
      ))}
    </>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  return (
    <Card className="product-card p-2 shadow-sm">
      
      <div className="position-relative">
        <Card.Img variant="top" src={product.image} className="product-img"  />
        <div className="wishlist-icons position-absolute top-0 end-0 p-2">
          <div className="d-flex flex-column gap-3">
            <button>
            <FaHeart className="icon me-2" />
            </button>
          <FaEye className="icon" />
          </div>
         
        </div>
      </div>
      <Card.Body className="text-center">
        <Card.Title className="product-title">{product.title}</Card.Title>
        <Card.Text className="product-price text-danger">${product.price}</Card.Text>
        <div className="rating">
          {renderStars(product.rating)} ({product.reviews})
        </div>
        {product.addToCart && <Button variant="dark" className="w-100 mt-2">Add To Cart</Button>}
      </Card.Body>
    </Card>
  );
};

// Main Product Listing Page
const ProductList = () => {
  return (
    <Container className="py-5 mt-5">
      <div className="d-flex align-items-center gap-2 mb-3">
              <img src={assets.rectangle} alt="" />
              <h5 className="text-danger">Our Products</h5>
            </div>
      
            <div className="d-flex align-items-center justify-content-between mb-4 ">
              <h2>Explore Our Book </h2>
              <div>
                <img className="mx-3 cursor-pointer" src={assets.leftArrow} alt="Left" style={{ cursor: "pointer", transition: "transform 0.3s ease-in-out" }} />
                <img className="cursor-pointer" src={assets.rightArrow} alt="Right" style={{ cursor: "pointer", transition: "transform 0.3s ease-in-out" }} />
              </div>
            </div>
      <Row className="g-4">
        {products.map((product, index) => (
          <Col key={index} md={3} sm={6}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button variant="danger" size="lg">View All Products</Button>
      </div>
    </Container>
  );
};

export default ProductList;
