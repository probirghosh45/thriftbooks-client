import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { UserContext } from "../../App";
import OrderList from "./OrderList";

const Orders = () => {
  const { loggedInUser } = useContext(UserContext);
  const [orderDetails, setOrderDetails] = useState([]);
  console.log(orderDetails)

  useEffect(() => {
    axios.get(`http://localhost:7500/orders?email=${loggedInUser.email}`)
      .then((res) => setOrderDetails(res.data))
      .catch((err) => console.log(err));
    

  }, [loggedInUser.email]);

  const { _id, orderTime} = orderDetails.length && orderDetails[0];
  //   const totalPrice = orderDetails.length && orderDetails.reduce((total, order) => total + Number(order.product?.price), 0);

  return (
    <>
      <h1 className="text-center pt-3">{loggedInUser.name},Thanks for Your Order</h1>
      <h4 className="text-center">Your Order is being Proceed</h4>
      <h3 className="ps-5 pt-5">Your Order List</h3>

      <Row className="ps-3 pe-3">
        {orderDetails.map((order)=> <OrderList key={order._id} order={order} /> )}
        
      </Row>
      <hr />
      <h3 className="ps-5 pt-3 pb-3">Order Details Information </h3>
      <Row>
        <Col>
          <ul type="none" style={{ fontWeight: "bold" }} className= "ps-5" >
            <li>Order Number : # {_id?.slice(0, 8)} </li>
            <li>
              Oder Date : {new Date(orderTime).toDateString("dd/MM/yyyy")}
            </li>
            <li>Price (excl. Shipping) : err </li>
            <li>Shipping Charge : $10 </li>
            <li>Total Price : err</li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Orders;
