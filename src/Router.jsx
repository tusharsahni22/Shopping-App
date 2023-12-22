import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './Component/Products'
import ProductDesc from './Component/ProductDesc/Index'
import Homepage from './Component/Homepage'
import MyProfile from './Component/MyProfile/Index'
import './App.css'
import Checkout from './Component/Checkout'
import ReturnandRefund from "./Component/Policy/returnandreturnpolicy"
// import PrivateRoutes from './Component/PrivateRoute'
function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<Product/>} />
        <Route path='/product-description' element={<ProductDesc/>} />
        <Route path='/policy/return&refund' element={<ReturnandRefund/>} />
        <Route path='/checkout' element={<Checkout/>} />
        {/* <Route path='/myprofile' element={<PrivateRoutes/>} /> */}
        <Route path='/myprofile' element={<MyProfile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
