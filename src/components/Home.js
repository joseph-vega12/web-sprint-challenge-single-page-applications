import React from 'react';
import { Link } from 'react-router-dom';
export default function Home(){
    return (
        <>
        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="pizza"/>
        <Link to="/pizza"><button>Create Pizza</button></Link>
        </>
    )
}
