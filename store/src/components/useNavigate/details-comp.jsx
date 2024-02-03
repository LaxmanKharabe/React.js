import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

export function DetailsComp(){
    let params =useParams();
    const [products, setProducts] = useState({id: 0, title: '', price: 0, description: '', category: '', image: '', rating: {rate: 0, count: 0}})
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res=>res.json())
        .then(productDetails=>{
            setProducts(productDetails);
        })
    },[params.id])  // this component will mount again whenever the id is changing check the url for it.
    return(
        <div className="container-fluid">
            <h3>Details</h3>
            <div className="row mb-3">
                <div className="col-4">
                    <img src={products.image} width="80%" height="200" />
                </div>
                <div className="col-8">
                    <dl>
                        <dt>Title</dt>
                        <dd>{products.title}</dd>
                        <dt>Price</dt>
                        <dd>{products.price}</dd>
                        <dt>Rating</dt>
                        <dd>
                            {products.rating.rate}
                            <span className="bi bi-star-fill text-success"></span>
                            [{products.rating.count}]
                        </dd>
                        <dd><Link to={`/products/${products.category}`}>Back to Products</Link></dd>
                    </dl>
                </div>
            </div>

        </div>
    )
}