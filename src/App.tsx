import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductDisplayPage from './components/ProductDisplayPage';
import Basket from './components/Basket';
import { ContextProvider } from './Context'

const App: React.FC = () => {
  const [basket, updateBasket] = useState([]);
  return (
    <ContextProvider value={[basket, updateBasket]}>
      <BrowserRouter>
        <h1>hey</h1>
        <Switch>
          <Route path="/" exact component={ProductDisplayPage} />
          <Route path="/basket" component={Basket} />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
