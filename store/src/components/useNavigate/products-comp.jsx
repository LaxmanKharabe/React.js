import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export function ProductsComp() {
    const [products, setProducts] = useState([{ id: 0, title: '', price: 0, description: '', category: '', image: '', rating: { rate: 0, count: 0 } }])
    let params = useParams();

    useEffect(() => {
        // category is the parameter which is in the Route for the <ProductsFakestore /> component
        // params.category used to access that parameter values
        fetch(`https://fakestoreapi.com/products/category/${params.category}`)
            .then(res => res.json())
            .then(allProducts => {
                setProducts(allProducts)
            })
    }, [])
    return (
        <div className="container-fluid">
            <Link className="" to="/">Back to categories</Link>
            <h3>{params.category.toUpperCase()}</h3>
            <div className="row">
                {
                    products.map((prod, ind) =>
                        <div className="card p-2 m-2" style={{ width: '190px' }} key={ind}>
                            <img src={prod.image} className="card-img-top" height="150" />
                            <div className="card-footer text-center">
                                {/* "/details" is a absolute path: it clears and set  */}
                                <Link className="btn btn-success form-control" to={`details/${prod.id}`}>Details</Link>
                            </div>
                        </div>
                    )
                }
                <Outlet />
            </div>
        </div>
    )
}