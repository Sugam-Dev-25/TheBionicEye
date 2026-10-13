import { useState } from 'react'
import{ BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import HomeComponents from './components/pages/home/HomeComponents'
import Header from './components/layouts/header/Header'
import Footer from './components/layouts/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomeComponents />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
