import React from "react";
export class CompoDidMount extends React.Component {

    constructor() {
        super();
        this.state = {
            Categories: [],
            Products: [],
        }
    }

    LoadCategories = () => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(Category => {
                this.setState({
                    Categories: Category
                })
            })
    }
    LoadProducts() {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(Product => {
                this.setState({
                    Products: Product.products
                })
                console.log(Product)
            })
    }

    componentDidMount() {
        this.LoadProducts();
    }
    render() {
        return (
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-primary" onClick={this.LoadCategories}>Fetch Data</button>
                    </div>
                    <div className="col-3">
                        <select className="form-select">
                            {
                                this.state.Categories.map((cat, index) =>
                                    <option value={cat} key={index}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className="row mt-3">
                    {
                        this.state.Products.map((pro, index) =>
                            <div class="card m-1 p-2" key={index} style={{width: '300px', height: '400px'}}>
                                <img src={pro.thumbnail} class="card-img-top" alt="Card Image" style={{height: '150px'}}/>
                                <div class="card-body">
                                    <h5 class="card-title">{pro.title}</h5>
                                    <p class="card-text" style={{overflowX: 'auto'}}>{pro.description}</p>
                                    <p>Price: ${pro.price}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}