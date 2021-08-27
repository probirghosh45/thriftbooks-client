import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from 'axios';
import Books from "../Books/Books";
const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
   const [books, setBooks] = useState([]);


   useEffect(() => {
       axios.get('http://localhost:7500/books')
       .then(res=>{
           setBooks(res.data);
       })

       .catch(err=>{
           console.log(err);
       })
      
   }, [])


    const onSubmit = data =>{
        axios.get(``)
        .then(res=>{
            setBooks(res.data);
        })

        .catch(err=>{
            console.log(err);
        })
    }
    

  return (
    <Container>
      <form className="search__container" onSubmit={handleSubmit(onSubmit)}>
        <input className="search__input"  placeholder="Search" name="keyword" type="text" defaultValue="" {...register("search-input")} />
        <button className="search__button">Search</button>
      </form>
      <Row xs={1} sm={1} md={2} lg={3}>
          {
             books.map(bookIdentity=> <Books book={bookIdentity} /> )
          }
      </Row>
    </Container>
  );
};

export default Home;
