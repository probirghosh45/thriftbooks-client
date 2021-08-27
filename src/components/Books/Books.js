import React,{useContext} from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";


const Books = (props) => {
  const { bookName, bookPrice,authorName, bookImage } = props.book;
  const {setCart} = useContext(UserContext)
  return (
    <Col>
      <Card className="shadow mb-4" style={{ borderRadius: "15px", border: 0 }}>
        <div className="d-flex align-items-center p-2"  style={{height: "300px"}}>
          <Card.Img
            className="w-100 pt-3"
              style={{ objectFit:"contain",maxHeight:"300px" }}
            
            src={bookImage}
          />
        </div>
        <Card.Body className="pt-3 mt-2">
        <Card.Title as={"h4"}>{bookName}</Card.Title>
        <Card.Title as={"h6"}>by {authorName}</Card.Title>
          
        </Card.Body>
        <Card.Body className="d-flex justify-content-between align-items-center pt-0" >
          <Card.Title
          as={"h2"}
          style={{ fontWeight:"700", color:"#ff4b2b" }}>
              ${bookPrice}
          </Card.Title>
          <Button 
          className="button__style shadow-none" 
          as={Link} 
          to="/checkout" 
          onClick={()=>setCart(props.book)}>
              Buy Now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Books;
