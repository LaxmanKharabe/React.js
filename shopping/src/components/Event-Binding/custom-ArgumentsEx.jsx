import { useState } from "react"

export function CustomArgumentsEx(){

    function DetailsClick(product,e){
        alert(`${product.Name}\n${product.Price}\n${e.clientX}`);
    }
   
    return(
        <div className="container-fluid">
            <h3>Event Binding</h3>
            <button onClick={(e)=>{ DetailsClick({Name:'TV', Price:45660.33}, e) }}>Details</button>      
        </div>
    )
}