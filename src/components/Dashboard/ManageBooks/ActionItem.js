import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useHistory, useParams } from 'react-router-dom';
const ActionItem = (props) => {
    const { _id, productName, price, category, productImage} = props.item;
    const { adminPanel } = useParams();
    const history = useHistory();

    const redirectEdit = () => {
        props.setEditBook(props.item)
        history.replace({ pathname: "/panel/editBook" });
    }

    return (
        <>
            <tbody style={{ fontWeight: "500" }}>
                <tr>
                    {adminPanel === "editBooks" &&
                        <td>
                            <Image height="50" src={productImage} rounded />
                        </td>
                    }
                    <td>{productName}</td>
                    <td>{category || ""}</td>
                    <td>${price}</td>
                    <td>
                        {adminPanel === "editBook" ?
                            <Button
                                variant="outline-success"
                                className="p-1 shadow-none mb-0"
                                onClick={() => props.setEditBook(props.item)}>
                                <FiEdit style={{ fontSize: "1.2rem" }} /> Edit
                            </Button>
                            : <>
                                <Button
                                    variant="outline-success"
                                    className="p-1 mb-0 shadow-none"
                                    onClick={redirectEdit}>
                                    <FiEdit style={{ fontSize: "1.2rem" }} />
                                </Button>
                                <Button
                                    variant="outline-danger"
                                    className="p-1 ml-2 mb-0 shadow-none"
                                    onClick={() => props.handleDeleteItem(_id)}>
                                    <RiDeleteBinLine style={{ fontSize: "1.3rem" }} />
                                </Button>
                            </>
                        }
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default ActionItem;