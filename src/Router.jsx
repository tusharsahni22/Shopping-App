import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Component/Header/Header'
import Product from './Component/Products'
import ProductDesc from './Component/ProductDesc/Index'
import Homepage from './Component/Homepage'
import MyProfile from './Component/MyProfile/Index'
import './App.css'
import Checkout from './Component/Checkout'
import ReturnandRefund from "./Component/Policy/returnandreturnpolicy"
import Shipping from "./Component/Policy/shipping"
import TermandCondition from "./Component/Policy/termsandservices"
import Privacy from "./Component/Policy/Privacy";
import Admin from './Component/Admin';
// import PrivateRoutes from './Component/PrivateRoute'
function Router () {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<Product/>} />
        <Route path='/product-description' element={<ProductDesc/>} />
        <Route path='/policy/return&refund' element={<ReturnandRefund/>} />
        <Route path='/policy/shipping-policy' element={<Shipping/>} />
        <Route path='/policy/terms-of-service' element={<TermandCondition/>}/>
        <Route path='/policy/privacy-policy' element={<Privacy/>}/>
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/admin' element={<Admin/>} />
        {/* <Route path='/myprofile' element={<PrivateRoutes/>} /> */}
        <Route path='/myprofile' element={<MyProfile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
