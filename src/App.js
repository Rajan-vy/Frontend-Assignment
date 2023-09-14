import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Homepage />}></Route>
        <Route exact path='/about' element={<AboutUs />}></Route>
        <Route exact path='/contact' element={<ContactUs />}></Route>
        <Route exact path='/products' element={<Products />}></Route>
      </Routes>

    </Router>
  );
};

export default App;
