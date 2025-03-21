import React, { useState, useEffect }  from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaHeart, FaEye, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { assets } from "../../image/assets";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

import ExpProducts from "./ExploreData";

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
const ProductCard = ({ product, setProductId }) => {

  const addToCart = (id) => {
    toast.success("Product added to cart", id);
    setProductId(id);

    console.log("Product added to cart", id);
  };

  
  const addToList = (id) => {
    toast.success("Product added to wishList", id);
    setProductId(id);

    console.log("Product added to wishList", id);

  };

  return (
    <Card className="product-card p-2 shadow-sm">
      
      <div className="position-relative">
        <Card.Img variant="top" src={product.image} className="product-img"  />
        <div className="wishlist-icons position-absolute top-0 end-0 p-2">
          <div className="d-flex flex-column gap-3">
            <button onClick={() => addToList(product.id)}>
            <FaHeart className="icon me-2" />
            </button>
          <FaEye className="icon" />
          </div>
         
        </div>
      </div>
      <Card.Body className="text-center">
      <p className="text-center fs-3">{product.title}</p>
        <Card.Text className="product-price text-danger">${product.price}</Card.Text>
        <div className="rating">
          {renderStars(product.rating)} ({product.reviews})
        </div>
        <Button variant="dark" className="w-100 mt-2" onClick={() => addToCart(product.id)}>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

// Main Product Listing Page
const ProductList = ({ setProductId }) => {

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
        {ExpProducts.map((product) => (
          <Col key={product?.id} md={3} sm={6}>
            <ProductCard product={product} setProductId={setProductId} />
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
