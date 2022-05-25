import React from 'react';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductInfo from './pages/ProductInfo';
import Login from './pages/Login';
import Register from './pages/Register'
import Cart from './pages/Cart';
import Stripe from './pages/Stripe';
function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:category' element={<ProductList/>}/>
        <Route path='/product-info/:id' element={<ProductInfo/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
