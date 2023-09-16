import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Filter from './components/Filter';
import './App.css'
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PageFooter from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Homepage />}></Route>
        <Route exact path='/about' element={<AboutUs />}></Route>
        <Route exact path='/contact' element={<ContactUs />}></Route>
        <Route exact path='/products' element={<Products />}></Route>
        <Route exact path='/products/:id' element={<ProductDetails/>}></Route>
        <Route exact path='/cart' element={<Cart/>}></Route>
        <Route exact path='/checkout' element={<Checkout/>}></Route>
      </Routes>
      <PageFooter></PageFooter>

    </Router>
  );
};

export default App;
