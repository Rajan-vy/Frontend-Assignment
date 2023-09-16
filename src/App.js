import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import './App.css'
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PageFooter from './components/Footer';
import ThankYou from './pages/ThankYou';

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
        <Route exact path='/thankyou' element={<ThankYou/>}></Route>
      </Routes>
      <PageFooter/>

    </Router>
  );
};

export default App;
