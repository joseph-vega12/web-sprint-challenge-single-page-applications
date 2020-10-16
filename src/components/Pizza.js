import React, { useState } from 'react';
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';
import schema from "./validation/formSchema";

const initalOrder = [];

const initalOrderValues = {
    name: "",
    size: "",
    pepporoni: false,
    ham: false,
    pineaple: false,
    bacon: false,
    instructions: "",
}

const initialErrors = {
    name: "",
    size: "",
    pepporoni: "",
    ham: "",
    pineaple: "",
    bacon: "",
    instructions: "",
}
export default function Pizza() {

    const [order, setOrder] = useState(initalOrder);
    const [formValues, setFormValues] = useState(initalOrderValues);
    const [formErrors, setFormErrors] = useState(initialErrors);


    const updateForm = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors,
                    [name]: "",
                });
            })

            .catch((err) => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0],
                });
            });

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const [post, setPost] = useState([]);

    const submitForm = () => {
        axios.post("https://reqres.in/api/users", formValues)
            .then(res => {
                setPost(res.data, post);
                console.log("success", post);
                setFormValues(initalOrderValues)
            })
            .catch(err => {
                console.log(err.response)
            })

        let newOrder = {
            name: formValues.name.trim(),
            size: formValues.size.trim(),
            pepporoni: formValues.pepporoni,
            ham: formValues.ham,
            pineaple: formValues.pineaple,
            bacon: formValues.bacon,
            instructions: formValues.instructions,
        }
        setOrder([...order, newOrder]);
        setFormValues(initalOrderValues);
    }

    return (
        <>
            <h1>CREATE YOUR OWN PIZZA</h1>
            <Form
                values={formValues}
                update={updateForm}
                submit={submitForm}
                errors={formErrors}
            />
            {order.map((item, idx) => {
                return (
                    <div key={idx}>
                        <div>Name: {item.name}</div>
                        <div>Size: {item.size}</div>
                        <div>Pepporoni: {item.pepporoni.toString()}</div>
                        <div>Ham: {item.ham.toString()}</div>
                        <div>Pineaple: {item.pineaple.toString()}</div>
                        <div>Bacon: {item.bacon.toString()}</div>
                        <div>Speacial Instructions: {item.instructions}</div>
                    </div>


                )
            })}
        </>
    );
}