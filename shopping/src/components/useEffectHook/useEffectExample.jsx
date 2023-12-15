import { useEffect, useState } from "react"

export function UseEffectExample(){
    const [products, setProducts] = useState([{id:0, title:'', price:0, description:'', image:'', rating:{rate:0, count:0}, category:''}]);

    function LoadProducts(){
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(products=>{
            setProducts(products);
        })
    }


    useEffect(()=>{
        LoadProducts();
    },[]);

    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between bg-danger text-white p-2">
                <div>
                    <h3>Shopper.</h3>
                </div>
                <div>
                    <span className="me-3">Home</span>
                    <span className="me-3">Electronics</span>
                    <span className="me-3">Men's Fashion</span>
                    <span className="me-3">Women's Fashion</span>
                    <span className="me-3">Jewelery</span>
                </div>
                <div>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-person me-3"></span>
                    <span className="bi bi-cart4"></span>
                </div>
            </header>
            <section className="row mt-3">
                <nav className="col-2">

                </nav>
                <main className="col-8 d-flex flex-wrap">
                   {
                     products.map(product=>
                        <div key={product.id} className="card m-2 p-2" style={{width:'250px'}}>
                            <img src={product.image} className="card-img-top" height="140" />
                            <div className="card-header overflow-auto" style={{height:'140px'}}>
                                <p>{product.title}</p>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Price</dt>
                                    <dd>{product.price}</dd>
                                    <dt>Rating</dt>
                                    <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span> </dd>
                                </dl>
                            </div>
                        </div>
                        )
                   }
                </main>
            </section>
        </div>
    )
}