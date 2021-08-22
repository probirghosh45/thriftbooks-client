import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Books = (props) => {
  const { productName, price, productImage } = props.book;
  return (
    <Col>
      <Card className="shadow mb-4" style={{ borderRadius: "15px", border: 0 }}>
        <div className="d-flex align-items-center p-2"  style={{height: "300px"}}>
          <Card.Img
            className="w-100 pt-3"
              style={{ objectFit:"contain",maxHeight:"300px" }}
            
            src={productImage}
          />
        </div>
        <Card.Body>
          <Card.Title as={"h3"}>{productName}</Card.Title>
        </Card.Body>
        <Card.Body className="d-flex justify-content-between align-items-center" >
          <Card.Title
          as={"h2"}
          style={{ fontWeight:"700", color:"#ff4b2b" }}>
              ${price}
          </Card.Title>
          <Button 
          className="button__style shadow-none" 
          as={Link} 
          to="/checkout" >
              Buy Now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Books;
