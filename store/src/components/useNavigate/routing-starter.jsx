import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { HomeCompo } from './home-comp';
import { ProductsComp } from './products-comp';
import { DetailsComp } from './details-comp';

function RoutingStarter(){
  return(
    <div className='container-fluid'>
      <BrowserRouter>
        <header className='text-center text-white p-2 bg-dark'>
          <span className='h3'><span className='bi bi-cart'></span>Shpping online</span>
        </header>
        <section className='mt-4'>
          <Routes>
            <Route path='/' element={<HomeCompo />} />
            <Route path='products/:category' element={<ProductsComp />}> 
              <Route path='details/:id' element={<DetailsComp />} />
            </Route>
            
            <Route path='*' element={<><code>Path you requested: Not Found</code></>} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  )
}

export default RoutingStarter;