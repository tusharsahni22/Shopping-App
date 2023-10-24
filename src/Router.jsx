import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './Component/Products'
import Homepage from './Component/Homepage'
import './App.css'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<Product/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
