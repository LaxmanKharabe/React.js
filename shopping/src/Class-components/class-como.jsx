import React from "react";
export class DataComp extends React.Component{
    constructor(){
        super();
        this.state={    //state name is user defined, we can use any name instead
            Name : 'Samsung TV',
            Price: 2500.45,
            Stock: true,
            City: ['Delhi', 'Hyd', 'Pune'],
            Rating: {Rate: 4.5}
        }
    }
    render(){
        return(
            <div className="container-fluid p-3">
                <h2>Product Details</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{this.state.Name}</dd>
                    <dt>Price</dt>
                    <dd>{this.state.Price}</dd>
                    <dt>Stock</dt>
                    <dd>{(this.state.Stock===true)?"Available": "Out of stock"}</dd>
                    <dt>City</dt>
                    <dd>
                        {
                            this.state.City.map((cities, index)=>
                                <li key={index}>{cities}</li>    
                            )
                        }
                    </dd>
                    <dt>Rating</dt>
                    <dd>{this.state.Rating.Rate}</dd>
                </dl>
            </div>
        )
    }
}