import { useState } from "react"

export function Flipkart(){
    const [product, setProduct] = useState({"title" : "", "ratings" : {"rate" : 0, "count" : 0, "Reviews" : 0}, "features" : [], "price": 0, "photo" : {"mobile" : "", "Assured" : ""}});

    function LoadData(){
        fetch("product.json")
        .then(response => {
            return response.json();
        }).then(product => 
            {
                setProduct(product);
            }
        )
    }
    return(
        <div className="container-fluid">
            <button className="btn btn-primary" onClick={LoadData}>Load data</button>
            <div className="row mt-2">
                <div className="col-2">
                    {
                        <img src={product.photo.mobile} alt={product.photo.mobile} width="200"/>
                    }
                </div>
                <div className="col-6">
                    <p className="h4 text-primary">{product.title}</p>
                    <span className="bg-success text-white ps-2 pe-2 pt-1 pb-1 rounded text-sm">
                        {product.ratings.rate}<span className="bi bi-star-fill ms-2 text-sm"></span>
                    </span>
                    <span className="text-dark ms-2 text-black-50">{product.ratings.count} Ratings & {product.ratings.Reviews} Reviews</span>
                    <ul className="mt-2">
                        {
                            product.features.map(feature => 
                                <li key={feature}>{feature}</li>    
                            )
                        }
                    </ul>
                </div>
                <div className="col-4">
                        <span className="fs-2 fw-bold"> &#8377;{product.price}</span> <br />
                        <s className="text-black-50">69700</s> <span className="text-success fw-bold">15% of </span>
                        <img src={product.photo.Assured} alt={product.photo.Assured} width="100"/>
                </div>
            </div>
        </div>
    )
}