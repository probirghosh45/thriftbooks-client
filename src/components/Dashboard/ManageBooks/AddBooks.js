import axios from "axios";
import React, { useState } from "react";
import { Form, Row, Col,Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddBooks = ({editBook, updateBook }) => {

  const {register,handleSubmit,watch,formState: { errors }} = useForm();
  const [imageURL, setImageURL] = useState("" || editBook?.bookImage);

  const onSubmit = (data) => {
    
      console.log(data);

      const bookInfo ={
           bookName: data.bookName,
          authorName: data.authorName,
          bookPrice: data.price,
          bookImage: imageURL
      }

      console.log(bookInfo);

      if(!imageURL){
        return swal ("image is uploading...", "Please Wait for a while...","info" )
      }

      if (editBook?._id) {
        return updateBook(bookInfo)
    }

    axios.post('http://localhost:7500/addBook', bookInfo )
    .then(res=> res.data && swal ("WoW","You have successfully added a Book!","success"))
    .then(err => console.log(err));


  }

  const handleImageUpload =event =>{
    console.log(event.target.files[0]);
    const imageData=new FormData();
    imageData.set('key','4441c3916186266ff77bdd932599ecfe');
    imageData.append('image', event.target.files[0]);

   axios.post('https://api.imgbb.com/1/upload',imageData)
   .then(res=>{
     console.log(res); //check console
     console.log(res.data.data.display_url); //collected directory from console
     setImageURL(res.data.data.display_url);
   })

   .catch(err=> console.log(err));


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
              name="bookName" //addProductData
              defaultValue={editBook?.bookName}  //update/edit ProductData
            //   {...register} //react hook form ver. 7
            ref={register}  //react hook form ver. 6
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
              defaultValue={editBook?.authorName}
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
              name="price"
              defaultValue={editBook?.bookPrice}  //update data
            //   {...register}
            ref={register}
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Group>
              <Form.Label style={{fontWeight:"Bold"}}>Add Book's Photo</Form.Label>
              {editBook?._id ?
                  <Button  
                  className="d-block shadow-none" 
                  as={"label"} 
                  htmlFor="photoUpload"
                  >
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
              ref={register}
              onChange={handleImageUpload}
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="mt-3">
                    <Button type="submit" className="shadow-none" variant={editBook?._id ? "success" : "info"}>
                        {editBook?._id ? "Update" : "Save"}
                    </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddBooks;
