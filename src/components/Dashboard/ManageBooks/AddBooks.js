import axios from "axios";
import React from "react";
import { Form, Row, Col,Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddBooks = ({editBooks,updateBooks}) => {

  const {register,handleSubmit,watch,formState: { errors }} = useForm();
  const onSubmit = (data) => {
      const bookInfo ={
          productName: data.bookName,
          category: data.authorName,
          price: data.bookPrice
      }

      if(editBooks?._id){
        return updateBooks(bookInfo)
    }

    axios.post('https://electro-server.herokuapp.com/addProduct', bookInfo )
    .then(res=> res.data && swal ("WoW","You have successfully added a Book!","success"))
    .then(err => console.log(err));

  }


  return (
    <div>
      <Form className="pt-4" onSubmit={handleSubmit(onSubmit)} >
      <Row>
          <Col lg={6} md={6} sm={12} xs={12}  >
            <Form.Group>
              <Form.Label style={{fontWeight:"Bold"}} >Book's Name</Form.Label>
              <Form.Control 
              placeholder="Enter Book's Name" 
              className="shadow-none"
              name="bookName"
              defaultValue={editBooks?.data.bookName} 
            //   {...register}
            ref={register}
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Group>
              <Form.Label style={{fontWeight:"Bold"}} >Author's Name</Form.Label>
              <Form.Control 
              placeholder="Enter Author's Name"
              className="shadow-none"
              name="authorName"
              defaultValue={editBooks?.data.authorName}
            //   {...register}
            ref={register}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Group>
              <Form.Label style={{fontWeight:"Bold"}} >Book's Price </Form.Label>
              <Form.Control 
              placeholder="Enter Book's Price" 
              className="shadow-none"
              name="bookPrice"
              defaultValue={editBooks?.data.bookPrice}
            //   {...register}
            ref={register}
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Group>
              <Form.Label style={{fontWeight:"Bold"}}>Add Book's Photo</Form.Label>
              {editBooks?._id ?
                  <Button  
                  className="d-block shadow-none" 
                  as={"label"} 
                  htmlFor="photoUpload
                  ref={register}
                  ">
                      Update Photo
                 </Button>
                 
                 :

                 <Button  
                 className="d-block shadow-none" 
                 as={"label"} 
                 htmlFor="photoUpload">
                     Add Photo
                </Button>
            
            
            }
           
              <Form.Control 
              type="file"
              id="photoUpload" 
              hidden="hidden"
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="mt-3">
                    <Button type="submit" className="shadow-none" variant={editBooks?._id ? "success" : "info"}>
                        {editBooks?._id ? "Update" : "Save"}
                    </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddBooks;
