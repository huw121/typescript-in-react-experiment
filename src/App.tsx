import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductDisplayPage from './components/ProductDisplayPage';
import Basket from './components/Basket';



const App: React.FC = () => {
  
  return (
    <BrowserRouter>
      <h1>hey</h1>
      <Switch>
        <Route path="/" exact component={ProductDisplayPage} />
        <Route path="/basket" component={Basket} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
