import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
// import Signup from './pages/Auth/Signup'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'

function Routing() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/Sign In" element={<Signup />} /> */}
          <Route path="/payments" element={<Payment />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing