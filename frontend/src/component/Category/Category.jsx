import React from 'react'
import { assets } from '../../image/assets'
import { FaBookOpen, FaBookmark } from "react-icons/fa";
import { Container, Row, Col, Card } from "react-bootstrap";

function Category() {

  const categories = [
    { id: 1, name: "Love Mystery", icon: <FaBookOpen size={30} /> },
    { id: 2, name: "Historical", icon: <FaBookOpen size={30} /> },
    { id: 3, name: "Sci-Fi", icon: <FaBookOpen size={30} /> },
    { id: 4, name: "Education", icon: <FaBookOpen size={30} /> },
    { id: 5, name: "Poetry/Drama", icon: <FaBookmark size={30} /> },
    { id: 6, name: "Romance", icon: <FaBookOpen size={30} /> }
  ];


  return (
    <Container className='mt-5'>
      <div className="d-flex align-items-center gap-2">
        <img src={assets.rectangle} alt="" />
        <h5 className="text-danger">Category</h5>
      </div>

      <div className="d-flex align-items-center justify-content-between ">
        <h2>Browse By Category</h2>
        <div>
          <img className="mx-3 cursor-pointer" src={assets.leftArrow} alt="Left" style={{ cursor: "pointer", transition: "transform 0.3s ease-in-out" }} />
          <img className="cursor-pointer" src={assets.rightArrow} alt="Right" style={{ cursor: "pointer", transition: "transform 0.3s ease-in-out" }} />
        </div>
      </div>

      <Row className="justify-content-center p-4 mt-3">
        {categories.map((category) => (
          <Col key={category.id} md={2} sm={4} xs={6} className="mb-3">
            <Card className="text-center p-4 shadow-sm border">
              <div className="mb-2">{category.icon}</div>
              <p>{category.name}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />
    </Container>
  )
}

export default Category
