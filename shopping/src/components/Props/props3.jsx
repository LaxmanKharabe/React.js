import { useState } from "react"
import { DataGrid2 } from "../Data-Grid/data-grid2";

export function Props3(){

    return(
        <div className="constainer-fluid">
            <DataGrid2 caption="Product Details" fields={['Name', 'Price', 'Stock']} data={[{Name: 'Realme 7', Price: 15000, Stock: 'In stock'}, {Name: 'Iphone', Price: 65000, Stock: 'In stock'}, {Name: 'Realme 8 pro', Price: 25000, Stock: 'Out of stock'}]} />
        </div>
    )
}