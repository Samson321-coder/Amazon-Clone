import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Auth from "./Pages/Auth/Auth";
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe(
  "pk_test_51ReGsaQbE1x3UlHhebwS5PTABGb5Ho7093LFUf4Gl6L5FNIuYRz5Az7pkZtJzAY4FDJtfRw0q6eilNNBAKw9QHTO00LrZENKyP"
);
function Routing() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/payments" element={
            <ProtectedRoute 
            msg={"You must login to pay"} redirect={"/payments"} >
              <Elements stripe={stripePromise} >
                 <Payment />
            </Elements>
            </ProtectedRoute>
            } />
          <Route path="/order" element={
            <ProtectedRoute
            msg={"You must login to see your orders"}
            redirect={"/order"}
            >
              <Orders />
              </ProtectedRoute>
              } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing