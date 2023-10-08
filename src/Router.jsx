import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Homepage from './Component/Homepage'
import './App.css'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/header' element={<Header />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
