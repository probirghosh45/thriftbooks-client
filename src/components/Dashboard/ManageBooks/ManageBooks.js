import React from "react";
import { Table } from "react-bootstrap";

const ManageBooks = () => {
  return (
    <div className="p-4">
      <Table  variant="dark" striped bordered hover  style={{fontSize:"20px"}}>
        <thead>
          <tr className="text-center">
            <th>Books Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JavaScript Everywhere</td>
            <td>Web Development</td>
            <td>$ 250</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>JavaScript Everywhere</td>
            <td>Web Development</td>
            <td>$ 250</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td colSpan="2">Total</td>
            <td>$ 500</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ManageBooks;
