import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Home = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example")); 

  return (
    <Container>
      <form className="search__container" onSubmit={handleSubmit(onSubmit)}>
        <input className="search__input"  placeholder="Search" defaultValue="" {...register("search-input")} />
        <button className="search__button">Search</button>
      </form>
    </Container>
  );
};

export default Home;
