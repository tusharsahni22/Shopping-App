import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './Component/Products'
import Homepage from './Component/Homepage'
import Signup from './Component/Auth/Signup'
import './App.css'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<Product/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
