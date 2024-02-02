import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { HomeFakestore } from './home-fakestore';
import { ProductsFakestore } from './products-fakestore';
import { DetailsFakestore } from './details-fakestore';

function FakeStoreApiForUseParamApi(){
  return(
    <div className='container-fluid'>
      <BrowserRouter>
        <header className='text-center text-white p-2 bg-dark'>
          <span className='h3'><span className='bi bi-cart'></span>Shpping online</span>
        </header>
        <section className='mt-4'>
          <Routes>
            <Route path='/' element={<HomeFakestore />} />
            <Route path='products/:category' element={<ProductsFakestore />} />
            <Route path='details/:id' element={<DetailsFakestore />} />
            <Route path='*' element={<><code>Path you requested: Not Found</code></>} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  )
}

export default FakeStoreApiForUseParamApi;