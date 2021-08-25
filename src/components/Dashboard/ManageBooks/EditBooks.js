import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';
import ActionItem from './ActionItem';
import AddBooks from './AddBooks';


const EditBooks = ({ editBook, setEditBook }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const updateBook = Book => {
        axios.patch(`https://electro-server.herokuapp.com/update/${editBook?._id}`, Book)
            .then(response => response.data && swal("Successfully updated", "Your product is successfully updated!", "success"))
            .catch(error => console.log(error));
    }

    return (
        <>
            {editBook?._id ? <AddBooks editBook={editBook} updateBook={updateBook} /> :
                <div className="px-5 pt-4 mx-md-4 mt-5 bg-white" style={{ borderRadius: "15px" }}>
                    <Table hover borderless responsive>
                        <thead className="bg-light">
                            <tr>
                                <th>Book's Photo</th>
                                <th>Book's Name</th>
                                <th>Author's Name</th>
                                <th>Book's Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            items.map(item => <ActionItem item={item} key={item._id} setEditBook={setEditBook} />)
                        }
                    </Table>
                </div>}
        </>
    );
};

export default EditBooks;