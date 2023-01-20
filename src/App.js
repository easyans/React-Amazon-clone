import React from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import DisplayContent from './DisplayContent'
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import PlaceOrder from './PlaceOrderContent/PlaceOrder.js';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Checkout from './Checkout'
import CartContextProvider from './CartContext'


function App() {

  return (
    <Router>
      <div className="App">
      <CartContextProvider >
        <Routes>

          <Route path="/" element={[<Header />,<Home />]} />
          <Route path="/checkout" element={[<Header />,<Checkout />]} />
          <Route path="/displaycontent" element={[<Header />,<DisplayContent />]} />
          <Route path="/signInPage" element={[<SignInPage />]} />
          <Route path="/signUpPage" element={[<SignUpPage />]} />
          <Route path="/order/:id" element={[<Header />,<PlaceOrder />]} />

        </Routes>
        {/* <DisplayContent /> */}
        {/* <SignInPage /> */}
        {/* <SignUpPage /> */}
        {/* <PlaceOrder /> */}
        </CartContextProvider >
      </div>
    </Router>
  );
}

export default App;
