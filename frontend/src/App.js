import './App.css';
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/Header'
import ProductsMenu from './screens/ProductsMenu';
import ProductPage from './screens/ProductPage';
import LandingPage from './screens/LandingPage';
import Cart from './screens/Cart';
function App() {

  return (
    <>
    <Router>
      <Routes >
        <Route path='/' element={<Main/>}>
          <Route path='products' element={<ProductsMenu/>}/>
          <Route path='products/:id' element={<ProductPage/>}/>
          <Route index element={<LandingPage/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
    </>
  );
}
function Main(){
  return(
    <>
    <Header/>
    <main>
      <Outlet/>
    </main>
    </>

  )
}
export default App;
