import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

function App(){
  return(
    <div className='container-fluid App mt-5'>
      <BrowserRouter>
        <nav>
          <Link className='btn btn-danger me-2' to="/">Home</Link>
          <Link className='btn btn-danger me-2' to="kids">Kids</Link>
          <Link className='btn btn-danger me-2' to="mens">Men's</Link>
          <Link className='btn btn-danger me-2' to="women">Women's</Link>
          <Link className='btn btn-danger me-2' to="login">Login</Link>
          <Link className='btn btn-danger' to="register">Register</Link>
        </nav>
        <Routes>
          <Route path='/' element={<><h2>Home component</h2></>} />
          <Route path='kids' element={<><h2>Kids Fashion</h2></>} />
          <Route path='mens' element={<><h2>Men's Fashion</h2></>} />
          <Route path='women' element={<><h2>Women's Fashion</h2></>} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<><code>Requested component not found</code></>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;