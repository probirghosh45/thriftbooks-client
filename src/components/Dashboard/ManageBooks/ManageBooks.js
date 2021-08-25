import axios from "axios";
import React,{useState,useEffect} from "react";
import { Table } from "react-bootstrap";
import ActionItem from "./ActionItem";

const ManageBooks = ({setEditBook}) => {
  
  const [items,setItems]=useState([]);

  useEffect(() => {
    axios.get('https://electro-server.herokuapp.com/products')
        .then(response => {
            setItems(response.data);
            // setLoading(false);
        })
        .catch(error => {
            console.log(error);
        })
}, [])

 
const handleDeleteItem = id => {
  const removedItems = items.filter(item => item._id !== id);

  axios.delete(`https://electro-server.herokuapp.com/delete/${id}`)
      .then(response => {
          response && setItems(removedItems);;
      })
      .catch(error => {
          console.log(error);
      })

    }
  
  return (
        <div className="px-5 pt-4 mx-md-4 mt-5 bg-white" style={{ borderRadius: "15px" }}>
        <Table hover borderless responsive>
            <thead className="bg-light">
                <tr>
                    <th>Book's Name</th>
                    <th>Author's Name</th>
                    <th>Book's Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            {/* <ClipLoader loading={loading} css={loaderStyle} /> */}
            {
                items.map(item => <ActionItem item={item} key={item._id} handleDeleteItem={handleDeleteItem}  setEditBook={setEditBook} />)
            }
        </Table>
    </div>
  );
};

export default ManageBooks;
