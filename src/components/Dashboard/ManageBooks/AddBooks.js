import React from 'react';
import { useForm } from "react-hook-form";

const AddBooks = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <div>
            <h1>This is Add Books</h1>
        </div>
    );
};

export default AddBooks;