import './App.css';
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
          <Route path='cart' element={<Cart/>}/>
          <Route index element={<LandingPage/>}/>
        </Route>
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
