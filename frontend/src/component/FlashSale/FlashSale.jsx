import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import './FlashSale.css'
import { assets } from "../../image/assets";

const products = [
  { id: 1, title: "Life is a Gift", price: 120, originalPrice: 160, discount: 40, rating: 5, reviews: 88, image: `${assets.book1}` },
  { id: 2, title: "What are you doing", price: 960, originalPrice: 1160, discount: 35, rating: 4, reviews: 75, image: `${assets.book2}` },
  { id: 3, title: "Mistery", price: 370, originalPrice: 400, discount: 30, rating: 5, reviews: 99, image: `${assets.book1}` },
  { id: 4, title: "Goals", price: 375, originalPrice: 400, discount: 25, rating: 5, reviews: 99, image: `${assets.book4}` },
  { id: 5, title: "New Book", price: 250, originalPrice: 300, discount: 20, rating: 4, reviews: 80, image: `${assets.book1}` },
  { id: 6, title: "Success Path", price: 420, originalPrice: 500, discount: 15, rating: 5, reviews: 150, image: `${assets.book2}` }
];

const FlashSale = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(315596);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    products.forEach(product => {
      console.log("Product:", product);
    });
  }, [products]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(timeLeft);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const addToList = () => {
    navigate("/heartPage");
  };

  const addToCart = (id) => {
    // alert("Product added to cart", id);
    
    console.log("Product added to cart", id);
    // navigate("/CartPage");
  };


  return (
    <>
      <Container className="mt-5">
        <div className="d-flex align-items-center gap-2">
          <img src={assets.rectangle} alt="" />
          <h5 className="text-danger">Today's</h5>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h2>Flash Sales</h2>
          <div className="d-flex mx-4">
            <div className="mx-2">Days<div className="fw-bold">{String(days).padStart(2, "0")}</div></div>
            <div className="mx-2">Hours<div className="fw-bold">{String(hours).padStart(2, "0")}</div></div>
            <div className="mx-2">Minutes<div className="fw-bold">{String(minutes).padStart(2, "0")}</div></div>
            <div className="mx-2">Seconds<div className="fw-bold">{String(secs).padStart(2, "0")}</div></div>
          </div>
          <div className="d-flex arrow">
            <img className="mx-3 cursor-pointer" src={assets.leftArrow} alt="Left" onClick={handlePrev} style={{ cursor: "pointer", transition: "transform 0.3s ease-in-out" }} />
            <img className="cursor-pointer" src={assets.rightArrow} alt="Right" onClick={handleNext} style={{ cursor: "pointer", transition: "transform 0.3s ease-in-out" }} />
          </div>
        </div>

        <div className="overflow-hidden position-relative">
          <Row className="mt-4 flex-nowrap" style={{ transition: "transform 0.5s ease-in-out", transform: `translateX(-${startIndex * 25}%)` }}>
            {products.map((product) => (
              <Col md={3} key={product.id} className="mb-4">
                <Card className="p-2 shadow-sm position-relative ">
                  <span className="badge bg-danger position-absolute top-0 end-0 m-2">-{product.discount}%</span>
                  <div className="inner-content-cart d-flex flex-column gap-2">
                    <button onClick={addToList}>
                      <img src={assets.heart} alt="" />
                    </button>
                    <img src={assets.View} alt="" />
                  </div>
                  <Card.Img variant="top" src={product.image} alt={product.title} className="degin-img" />
                  <Card.Body>
                    {/* <Card.Title>{product.title}</Card.Title> */}
                    <h5>{product.title}</h5>
                    <div className="d-flex align-items-center">
                      <span className="text-danger fw-bold">${product.price}</span>
                      <span className="text-muted ms-2 text-decoration-line-through">${product.originalPrice}</span>
                    </div>
                    <div>
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} color={i < product.rating ? "#ffc107" : "#e4e5e9"} />
                      ))}
                      <small className="ms-2">({product.reviews})</small>
                    </div>
                    <Button className="w-100 mt-2" variant="dark" onClick={()=>addToCart(product.id)}>Add To Cart</Button>
                  </Card.Body>
                </Card>
                {/* {console.log("product:", product)} */}
              </Col>
            ))}
          </Row>
        </div>

        <div className="text-center mt-3">
          <Button variant="danger">View All Products</Button>
        </div>
        <hr />
      </Container>
    </>
  );
};

export default FlashSale;
