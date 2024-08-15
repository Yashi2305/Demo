import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/footer/Footer'
import AppDownload from './components/app-download/AppDownload'

const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/cart" element={<Cart/>}></Route>
         <Route path="/order" element={<PlaceOrder/>}></Route>
      </Routes>
    </div>
    <AppDownload/>
    <Footer/>
    </>
  )
}

export default App
