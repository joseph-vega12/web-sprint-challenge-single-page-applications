import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;
import Home from './components/Home';
import Pizza from './components/Pizza';



const App = () => {

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
