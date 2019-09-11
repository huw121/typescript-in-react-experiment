import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductDisplayPage from './components/ProductDisplayPage';
import Basket from './components/Basket';
import Nav from './components/Nav';
import { ContextProvider } from './Context';
import RouteNotFound from './components/RouteNotFound'
import { createGlobalStyle } from 'styled-components'

const BodyStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #c20e53;
    font-family: monospace;
    color: white
  }
`

const App: React.FC = () => {
  const [basket, updateBasket] = useState([]);
  return (
    <ContextProvider value={[basket, updateBasket]}>
      <BodyStyle />
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
