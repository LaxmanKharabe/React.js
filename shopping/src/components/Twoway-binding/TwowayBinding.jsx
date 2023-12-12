import { useState } from "react";

export function TwowayBinding() {

    const [getProduct, setProduct] = useState({
        "Name": "Name of product",
        "Price": 0,
        "City": "Select city",
        "Stock": true
    })
    const [updateProduct, setupdatedProduct] = useState({
        "Name": ["Name of product"],
        "Price": 0,
        "City": "Select city",
        "Stock": true
    })
    function NameChange(e) {
        setProduct({
            Name: e.target.value,
            Price: getProduct.Price,
            City: getProduct.City,
            Stock: getProduct.Stock
        })
    }
    function PriceChange(e) {
        setProduct({
            Price: e.target.value,
            Name: getProduct.Name,
            City: getProduct.City,
            Stock: getProduct.Stock
        })
    }
    function CityChange(e) {
        setProduct({
            City: e.target.value,
            Name: getProduct.Name,
            Price: getProduct.Price,
            Stock: getProduct.Stock
        })
    }
    function stockChange(e) {
        setProduct({
            Stock: e.target.checked,
            Price: getProduct.Price,
            Name: getProduct.Name,
            City: getProduct.City
        })
    }
    function updateProducts(e) {
        setupdatedProduct({
            Name: getProduct.Name,
            Price: getProduct.Price,
            City: getProduct.City,
            Stock: getProduct.Stock
        })
    }
    return (
        <div className="container-fluuid">
            <div className="row mt-3 ms-2">
                <h1 className="text-center  mb-3">Product Details</h1>
                <div className="col-3">
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" onChange={NameChange} className="form-control" /></dd>
                        <dt>Price</dt>
                        <dd><input type="number" onChange={PriceChange} className="form-control" /></dd>
                        <dt>City</dt>
                        <dd>
                            <select onChange={CityChange} className="form-select" value={getProduct.City}>
                                <option>Select City</option>
                                <option>Hyderabad</option>
                                <option>Mumbai</option>
                                <option>Pune</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input type="checkbox" onChange={stockChange} checked={getProduct.Stock} className="form-check-input" /> <label>{(getProduct.Stock == true) ? "Available" : "Out of stock"}</label>
                        </dd>
                    </dl>
                </div>
                <div className="col-5">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>City</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{getProduct.Name}</td>
                                <td>{getProduct.Price}</td>
                                <td>{getProduct.City}</td>
                                <td>{(getProduct.Stock == true) ? "Available" : "Out of stock"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-4">
                    <dl>
                        <dt>Name</dt>
                        <dd>{updateProduct.Name}</dd>
                        <dt>Price</dt>
                        <dd>{updateProduct.Price}</dd>
                        <dt>City</dt>
                        <dd>{updateProduct.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(updateProduct.Stock == true)? "Available" : "Out of stock"}</dd>
                    </dl>
                </div>
            </div>
            <div className="row ms-2">
                <div className="col-3"><button className="btn btn-primary form-control" onClick={updateProducts}>Submit Product</button></div>
            </div>
        </div>
    )
}