import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import productDetails from './components/productDetail/productDetails';
import Cart from './components/cart/Cart';
import { TemplateProvider } from './components/templates/TemplateProvider';
import checkout from './components/checkout/checkout';

import './App.css';

function App() {
  alert('This application is not responsive');
  return (
    <TemplateProvider>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/product/:id' component={productDetails}/>
        <Route path='/cart/product/:id' component={productDetails} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/buyNow/product/:id' component={checkout} /> 
        <Route path='/checkout' exact component={checkout} />

      </Switch>
    </BrowserRouter>
    </TemplateProvider>
  );
}

export default App;
