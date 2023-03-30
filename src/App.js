import './App.css';
import Checkout from './camponents/cart/Checkout';
import DisplayContent from './camponents/displaycontent/DisplayContent';
import HomePage from './camponents/homepage/HomePage';
import Navbar from './camponents/navbar/Navbar';
import PlaceOrder from './camponents/Detail/PlaceOrder';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CartContextProvider from './camponents/CartContex';
import Footer from './camponents/footer/Footer';

function App() {
  return (

    

    <div className="App">

      <CartContextProvider>
      <Navbar />
        <Routes >
          <Route  path='' element={<HomePage />} />
          <Route path='/display' element={<DisplayContent />} />
          <Route path='/detail/:id' element={<PlaceOrder />} />
          <Route path='/cart' element={<Checkout />} />
        </Routes>
        <Footer />
      </CartContextProvider>


    </div>
  );
}

export default App;
