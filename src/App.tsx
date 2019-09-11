import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductDisplayPage from './components/ProductDisplayPage';
import Basket from './components/Basket';
import Nav from './components/Nav';
import { ContextProvider } from './Context';
import './App.css';
import RouteNotFound from './components/RouteNotFound'

const App: React.FC = () => {
  const [basket, updateBasket] = useState([]);
  return (
      <ContextProvider value={[basket, updateBasket]}>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/" exact component={ProductDisplayPage} />
            <Route path="/basket" component={Basket} />
            <RouteNotFound />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
  );
}

export default App;
