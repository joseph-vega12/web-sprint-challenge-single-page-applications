import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;
import Home from './components/Home';
import Pizza from './components/Pizza';

const initalOrder = [];

const initalOrderValues ={
  name: "Josep Vega",
  size: "Large",
  pepporoni: true,
  ham: true,
  pineaple: true, 
  bacon: true,
}


const App = () => {

  const [ order, setOrder ] = useState(initalOrder);
  const [ formValues, setFormValues ] =useState(initalOrderValues);
  
  return ( 
    <Router>
    <>
      <h1>Lambda Eats</h1>
    </>
    <Switch>
      <Route path="/pizza" component={Pizza}></Route>
      <Route path="/" component={Home}></Route>
    </Switch>
    </Router>
  );
};
export default App;
