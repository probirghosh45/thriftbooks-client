import React, { useContext } from 'react';
import { Card, Col } from 'react-bootstrap';
import { UserContext } from '../../App';

const OrderList = ({order}) => {
    const { bookName, bookPrice, bookImage, authorName } = order.book
    return (
        <Col  lg={4} md={6} sm={6} xs={12} >
            <Card className="mb-3 justify-content-center align-items-center" style={{maxWidth:"540px", height: "300px" }} >
                <Col md={4} sm={4} xs={4}>
                  <Card.Img src={bookImage} />
                </Col>
                <Col md={8} >
                    <Card.Body className="p-2">
                        <Card.Title>{bookName}</Card.Title>
                        <Card.Text>
                            <ul type="none"className="ps-0">
                                <li>{authorName}</li>
                                <li>{(new Date(order.orderTime).toDateString('dd/MM/yyyy'))}</li>
                                <li>$ {bookPrice}</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Card>
        </Col>
    );
};

export default OrderList;