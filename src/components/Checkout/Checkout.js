import React,{useContext} from "react";
import { Container, Table ,Button} from "react-bootstrap";
import swal from 'sweetalert';
import axios from 'axios';
import { UserContext} from "../../App";
const Checkout = () => {

  const {loggedInUser} = useContext(UserContext)
  const {cart} = useContext(UserContext)

    const handleCheckOut=()=>{
 
       const orderDetails = {...loggedInUser, book:cart , orderTime : new Date() };

        axios.post('https://vast-lake-57396.herokuapp.com/addOrder',orderDetails)
        .then(res=>{res.data && swal("Thank You!", "Your Order Placed Successfully!", "success");
        })
        .catch(err=>console.log(err))
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
              <td>{cart.bookName}</td>
              <td>1</td>
              <td>$ {cart.bookPrice}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td></td>
              <td>$ {cart.bookPrice}</td>
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
