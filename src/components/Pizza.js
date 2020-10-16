import React, { useState } from 'react';
import Form from './Form';

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
export default function Pizza() {

    const [order, setOrder] = useState(initalOrder);
    const [formValues, setFormValues] = useState(initalOrderValues);


    const updateForm = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const submitForm = () => {
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