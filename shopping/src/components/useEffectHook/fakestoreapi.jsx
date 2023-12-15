import { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export function FackStore() {

    const [products, setProducts] = useState([{ "id": 0, "title": "", "price": 0, "description": "", "category": "", "image": "", "rating": { "rate": 0, "count": 0 } }]);
    const [productsCategory, setCategory] = useState([]);
    const [oncatChange, setonCatShange] = useState([]);

    function productsData(url) {
        fetch(url)
            .then(res => res.json())
            .then(products => {
                setProducts(products);
                // console.log(products);
            })
    }

    function prodCategory(url) {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(productsCategory => {
                productsCategory.unshift('All');
                setCategory(productsCategory);
                // console.log(productsCategory);
            });
    }
    function handleOnCategoryChange(e) {
        productsData(`http://fakestoreapi.com/products/category/${e.target.value}`);
    }
    useEffect(() => {
        productsData('https://fakestoreapi.com/products');
        prodCategory();
    }, [])


    return (
        <div className="container-fluid">
            <Navbar expand="lg" bg="light" className="mb-2 ps-2 pe-2">
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto">
                        <Nav.Link href="#" className="nav-link active">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#" className="nav-link">
                            Link
                        </Nav.Link>
                        <NavDropdown title="Dropdown" id="navbarDropdown">
                            <NavDropdown.Item href="#" className="dropdown-item">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#" className="dropdown-item">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#" className="dropdown-item">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" className="nav-link disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav>

                    <Button className="btn position-relative btn-light">
                        My cart <span className="bi bi-cart"></span>
                        <span className="badge text-white bg-danger rounded-circle position-absolute" style={{ top: '-10px', right: '-5px' }}>0</span>
                    </Button>
                </Navbar.Collapse>
            </Navbar>
            <div className="row postion-relative top-5">
                <div className="col-3">
                    <select className="form-select w-75" onChange={handleOnCategoryChange}>
                        {
                            productsCategory.map(cate =>
                                <option key={cate} value={cate}>{cate.toUpperCase()}</option>
                            )
                        }
                    </select>
                </div>
                <div className="col-7">
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
                                        <button className="btn btn-danger me-2 w-25">Add to cart</button>
                                        <button className="btn btn-danger w-25">Buy</button>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>

                <div className="col-2">

                </div>
            </div>
        </div>
    )
}