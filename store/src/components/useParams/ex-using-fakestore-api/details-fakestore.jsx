import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

export function DetailsFakestore(){
    let params =useParams();
    const [products, setProducts] = useState({id: 0, title: '', price: 0, description: '', category: '', image: '', rating: {rate: 0, count: 0}})
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res=>res.json())
        .then(productDetails=>{
            setProducts(productDetails);
        })
    },[])
    return(
        <div className="container-fluid">
            <h3>Details</h3>
            <div className="row">
                <div className="col-4">
                    <img src={products.image} width="100%" height="250" />
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
                    </dl>
                </div>
            </div>
            <div className="mt-2">
                <Link to={`/products/${products.category}`}>Back to Products</Link>
            </div>
        </div>
    )
}