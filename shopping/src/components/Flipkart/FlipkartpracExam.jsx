import { useState } from "react"

export function FlipkartPracExam() {
    const [products, setProductList] = useState(
        [
            {
                "title": "",
                "price": 0,
                "ratings": {
                    "rate": 0,
                    "count": 0,
                    "Reviews": 0
                },
                "features": [],
                "photo": {
                    "mobile": "",
                    "Assured": ""
                }
            }
        ]
    )

    function DisplayData() {
        fetch("productList.json").then(res => {
            return res.json();
        }).then(resProduct => {
            setProductList(resProduct);
        })
    }
    return (
        <div className="container-fluid">
            <button className="btn btn-primary" onClick={DisplayData}>Display all data</button>
            {
                products.map((productData, index) =>
                    <div className="row mt-2" key={index}>
                        <div className="col-2">
                            <img src={productData.photo.mobile} alt={productData.photo.mobile} width="200" />
                        </div>
                        <div className="col-6">
                            <p className="h5 text-primary">{productData.title}</p>
                            <span className="pt-1 pb-1 ps-2 pe-2 text-white bg-success text-sm rounded">
                                {productData.ratings.rate} <span className="text-sm bi bi-star-fill"></span>
                            </span>
                            <span className="text-black-50 ms-2">
                                {productData.ratings.count} Ratings & {productData.ratings.Reviews} Reviews
                            </span>
                            <ul className="mt-2">
                                {
                                    productData.features.map((feature, indexFeature) =>
                                        <li>{feature}</li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="col-4">
                            <p>
                                <span className="h4 me-5">{productData.price}</span>
                                <img src={productData.photo.Assured} width="100" alt={productData.photo.Assured} />
                            </p>
                            <s className="text-black-50">70000</s> <span className="fw-bold text-success">13% Of</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}