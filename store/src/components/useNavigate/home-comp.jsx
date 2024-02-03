import { useEffect, useState } from "react";
import {Link } from "react-router-dom";
export function HomeCompo(){
    const [categories, setCategories] = useState([]);
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(categories=>{
            setCategories(categories)
        })
    },[])
    return(
        <div className="container-fluid">
            <h3>Home component</h3>
            <ol>
                {
                    categories.map(getCategory=>
                        <li key={getCategory}>
                            <Link to={`products/${getCategory}`}>{getCategory.toUpperCase()}</Link>
                        </li>
                    )
                }
            </ol>
        </div>
    )
}