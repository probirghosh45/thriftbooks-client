import React from "react";
import { Container, Table ,Button} from "react-bootstrap";
import swal from 'sweetalert';
import axios from 'axios';

const Checkout = () => {


    const handleCheckOut=()=>{
        axios.post('https://electro-server.herokuapp.com/addOrder')
        .then(res=>{
            res.data && swal("Thank You!", "Your Order Placed Successfully!", "success");
        })
    }


  return (
    <Container className="py-5 my-3">
      <h2>Checkout</h2>
      <div className="shadow px-4 pt-3" style={{ borderRadius: "15px" }}>
        <Table hover responsive>
          <thead>
            <tr>
              <th>Description of Book(s)</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Eloquent JavaScript</td>
              <td>1</td>
              <td>$250</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td></td>
              <td>$250</td>
            </tr>
          </tfoot>
        </Table>
      </div>
      <div className="pt-3 text-center">
          <Button onClick={handleCheckOut} className="button__style shadow-none">
             Checkout
          </Button>
      </div>
    </Container>
  );
};

export default Checkout;
