import React, { useState } from "react";

export function ExampleSecond() {
  const [getProduct, setProduct] = useState({
    Name: ["Name of product"],
    Price: 0,
    City: "Select city",
    Stock: true,
  });
  const [updateProduct, setUpdatedProduct] = useState({
    Name: ["Name of product"],
    Price: 0,
    City: "Select city",
    Stock: true,
  });
  const [productList, setProductList] = useState([]); // New state for the list of products

  function NameChange(e) {
    setProduct({
      ...getProduct,
      Name: [e.target.value],
    });
  }

  function PriceChange(e) {
    setProduct({
      ...getProduct,
      Price: e.target.value,
    });
  }

  function CityChange(e) {
    setProduct({
      ...getProduct,
      City: e.target.value,
    });
  }

  function stockChange(e) {
    setProduct({
      ...getProduct,
      Stock: e.target.checked,
    });
  }

  function updateProducts() {
    const newProductList = [...productList, { ...getProduct }];
    setProductList(newProductList);

    // Clear the form after submission
    setProduct({
      Name: ["Name of product"],
      Price: 0,
      City: "Select city",
      Stock: true,
    });
  }

  return (
    <div className="container-fluid">
      <div className="row mt-3 ms-2">
        <h1 className="text-center mb-3">Product Details</h1>
        <div className="col-3">
          <dl>
            <dt>Name</dt>
            <dd>
              <input
                type="text"
                value={getProduct.Name[0]}
                onChange={NameChange}
                className="form-control"
              />
            </dd>
            <dt>Price</dt>
            <dd>
              <input
                type="number"
                value={getProduct.Price}
                onChange={PriceChange}
                className="form-control"
              />
            </dd>
            <dt>City</dt>
            <dd>
              <select
                onChange={CityChange}
                className="form-select"
                value={getProduct.City}
              >
                <option>Select City</option>
                <option>Hyderabad</option>
                <option>Mumbai</option>
                <option>Pune</option>
              </select>
            </dd>
            <dt>Stock</dt>
            <dd className="form-switch">
              <input
                type="checkbox"
                onChange={stockChange}
                checked={getProduct.Stock}
                className="form-check-input"
              />{" "}
              <label>
                {getProduct.Stock ? "Available" : "Out of stock"}
              </label>
            </dd>
          </dl>
        </div>
        <div className="col-5">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>City</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((product, index) => (
                <tr key={index}>
                  {product.Name.map((pName, idx) => (
                    <td key={idx}>{pName}</td>
                  ))}
                  <td>{product.Price}</td>
                  <td>{product.City}</td>
                  <td>{product.Stock ? "Available" : "Out of stock"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-4 fw-bold">
            <p>Name: <span className="fw-normal">{getProduct.Name}</span></p>
            <p>Price: <span className="fw-normal">{getProduct.Price}</span></p>
            <p>City: <span className="fw-normal">{getProduct.City}</span></p>
            <p>Stock: <span className="fw-normal">{getProduct.Stock ? "Available" : "Out of stock"}</span></p>
        </div>
      </div>
      <div className="row ms-2">
        <div className="col-3">
          <button className="btn btn-primary form-control"onClick={updateProducts}>Submit Product</button>
        </div>
      </div>
    </div>
  );
}
