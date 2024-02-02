import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Login } from '../../login/login';
import { Register } from '../../register/register';
import { Search } from './search';

function UseParamsHookDemo(){
  return(
    <div className='container-fluid App mt-5'>
      <BrowserRouter>
        <nav>
          <Link className='btn btn-danger me-2' to="/">Home</Link>
          <Link className='btn btn-danger me-2' to="kids">Kids</Link>
          <Link className='btn btn-danger me-2' to="login">Login</Link>
          <Link className='btn btn-danger me-2' to="register">Register</Link>
          {/* Passing parameters values as footwear and 12 for category and size parameters for Route*/}
          <Link className='btn btn-danger me-2' to="search/footwear/12"><span className='bi bi-search'></span></Link>
        </nav>
        <Routes>
          <Route path='/' element={<><h2>Home component</h2></>} />
          <Route path='kids' element={<><h2>Kids Fashion</h2></>} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          {/* Parameters created below: category and size are the parameters for below Route */}
          <Route path='search/:category/:size' element={<Search />} />
          <Route path='*' element={<><code>Requested component not found</code></>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default UseParamsHookDemo;