import { useEffect, useState } from "react";

export function FackStore() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([{ id: 0, title: '', image: '', price: 0, description: '', category: '', rating: { rate: 0, count: 0 } }]);
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [updateItems, setUpdateItems] = useState([]);
    function LoadCategories() {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(categories => {
                categories.unshift("all");
                setCategories(categories);
            })
    }

    function LoadProducts(url) {
        fetch(url)
            .then(res => res.json())
            .then(products => {
                setProducts(products);
            })
    }
    function handleCategoryChange(e) {
        if (e.target.value == "all") {
            LoadProducts("https://fakestoreapi.com/products");
        } else {
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }

    function handleAddToCartClick(e) {
        fetch(`https://fakestoreapi.com/products/${e.target.value}`)
            .then(res => res.json())
            .then(product => {
                cartItems.push(product);
                setCartCount(cartItems.length);
            })
    }
    function displayCartItems() {
        // setUpdateItems(cartItems.item, cartItems.image);
        setUpdateItems(cartItems.map(({ title, image }) => ({ title, image })));
    }
    
    useEffect(() => {
        LoadCategories();
        LoadProducts("https://fakestoreapi.com/products");
    }, []);

    return (
        <div className="container-fluid">
            <header className="d-flex justify-content-between p-3 bg-dark text-white">
                <div>
                    <span className="h4">Shopper.</span>
                </div>
                <div>
                    <span className="me-3">Home</span>
                    <span className="me-3">Electronics</span>
                    <span className="me-3">Jewelery</span>
                    <span className="me-3">Men's Fashion</span>
                    <span className="me-3">Women's Fashion</span>
                </div>
                <div>
                    <button className="btn position-relative btn-light" onClick={displayCartItems}>
                        My cart <span className="bi bi-cart"></span>
                        <span className="badge text-white bg-danger rounded-circle position-absolute" style={{ top: '-10px', right: '-5px' }}>{cartCount}</span>
                    </button>

                </div>
            </header>

            <div className="row mt-4 p-3">
                <div className="col-3">
                    <select className="form-select w-75" onChange={handleCategoryChange}>
                        {
                            categories.map(cate =>
                                <option key={cate} value={cate}>{cate.toUpperCase()}</option>
                            )
                        }
                    </select>
                </div>
                <div className="col-5">
                    {
                        products.map(productsData =>
                            <div key={productsData.id} className="row">
                                <div className="col-3 d-flex justify-content-center">
                                    <img src={productsData.image} alt={productsData.image} className="w-100 h-50" />
                                </div>
                                <div className="col-8 ">
                                    <div className="mb-5 my-auto">
                                        <p className="h5 text-dark">{productsData.title}</p>
                                        <span className="text-white bg-success rounded w-25" style={{ padding: '5px', fontSize: '12px' }}>
                                            {productsData.rating.rate} <span className="text-sm bi bi-star-fill" style={{ fontSize: '12px' }}></span>
                                        </span>
                                        <span className="text-black-50 ms-2">
                                            {productsData.rating.rate} Ratings & {productsData.rating.count} Reviews
                                        </span>
                                        <p style={{ fontSize: '14px', marginTop: '20px' }}>{productsData.description}</p>
                                        <p className="fw-bold fs-5">
                                            {(productsData.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}

                                        </p>
                                        <button className="btn btn-danger me-2 w-50" value={productsData.id} onClick={handleAddToCartClick}>Add to cart</button>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>

                <div className="col-4">
                    <div className="row">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    updateItems.map(item =>
                                        <tr>
                                            <td style={{fontSize: '14px'}}>{item.title}</td>
                                            <td>
                                                <a href={item.image} target="_blank">
                                                    <img src={item.image}  width="25" height="25" />
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}