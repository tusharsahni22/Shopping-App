import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Product = React.lazy(() => import('./Component/Products'))
const ProductDesc = React.lazy(() => import('./Component/ProductDesc/Index'))
const Homepage = React.lazy(() => import('./Component/Homepage'))
const MyProfile = React.lazy(() => import('./Component/MyProfile/Index'))
const Checkout = React.lazy(() => import('./Component/Checkout'))
const ReturnandRefund = React.lazy(() => import("./Component/Policy/returnandreturnpolicy"))
const Shipping = React.lazy(() => import("./Component/Policy/shipping"))
const TermandCondition = React.lazy(() => import("./Component/Policy/termsandservices"))
const Privacy = React.lazy(() => import("./Component/Policy/Privacy"))
// import Product from './Component/Products'
// import ProductDesc from './Component/ProductDesc/Index'
// import Homepage from './Component/Homepage'
// import MyProfile from './Component/MyProfile/Index'
// import './App.css'
// import Checkout from './Component/Checkout'
// import ReturnandRefund from "./Component/Policy/returnandreturnpolicy"
// import Shipping from "./Component/Policy/shipping"
// import TermandCondition from "./Component/Policy/termsandservices"
// import Privacy from "./Component/Policy/Privacy";
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
        <Route path='/policy/shipping-policy' element={<Shipping/>} />
        <Route path='/policy/terms-of-service' element={<TermandCondition/>}/>
        <Route path='/policy/privacy-policy' element={<Privacy/>}/>
        <Route path='/checkout' element={<Checkout/>} />
        {/* <Route path='/myprofile' element={<PrivateRoutes/>} /> */}
        <Route path='/myprofile' element={<MyProfile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
