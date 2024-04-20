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
import OrderSuccessPage from './Component/OrderSuccessPage';
import ProcessingOrder from './Component/Checkout/PaymentProcesscing';
import PrivateRoutes from './Component/PrivateRoute'
import Faq from './Component/Footer/Faq'
import BottomHeaderComp from './Component/Header/BottomHeader'

function Layout({ children }) {
  return (
    <>
      <Header/>
      {children}
    </>
  );
}
function BottomHeader({ children }) {
  return (
    <>
      <BottomHeaderComp/>
      {children}
    </>
  );
}


function Router () {
  return (
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/' element={<Layout><Homepage/><BottomHeader/></Layout>} />
        <Route path='/products' element={<Layout><Product/><BottomHeader/></Layout>} />
        <Route path='/product-description' element={<Layout><ProductDesc/><BottomHeader/></Layout>} />
        <Route path='/product-description/:id' element={<Layout><ProductDesc/><BottomHeader/></Layout>} />
        <Route path='/policy/return&refund' element={<Layout><ReturnandRefund/><BottomHeader/></Layout>} />
        <Route path='/policy/shipping-policy' element={<Layout><Shipping/><BottomHeader/></Layout>} />
        <Route path='/policy/terms-of-service' element={<Layout><TermandCondition/><BottomHeader/></Layout>}/>
        <Route path='/policy/privacy-policy' element={<Layout><Privacy/><BottomHeader/></Layout>}/>
        <Route path='/Frequently-Asked-Questions' element={<Layout><Faq/><BottomHeader/></Layout>}/>
        

        <Route path='/' element={<PrivateRoutes/>}>
        <Route path='/myprofile' element={<Layout><MyProfile/><BottomHeader/></Layout>} />
        <Route path='/checkout' element={<Layout><Checkout/><BottomHeader/></Layout>} />
        <Route path='/order-success' element={<Layout><OrderSuccessPage/><BottomHeader/></Layout>} />
        <Route path='/order/Processing-order/:id' element={<ProcessingOrder/>} />
        <Route path='/admin' element={<Admin/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
