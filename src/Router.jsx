import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Header"
import './App.css'

function Router() {

  return (
    <BrowserRouter>
    <Routes>     
      <Route path="/" element={<Home/>}/> 
      <Route path="/newItem" element={<Home/>}/>
      <Route path="/viewItem" element={<Home/>}/>
      
    </Routes>
  </BrowserRouter>
  )
}

export default Router
