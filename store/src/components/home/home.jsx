import { useEffect, useState } from "react";
import {Link, Outlet, useNavigate } from "react-router-dom";
export function Home(){
    const [categories, setCategories] = useState([]);
    let navigate = useNavigate();
    async function FetchData () {
        try{
            const response = await fetch('https://fakestoreapi.com/products/categories');
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data =  await response.json();
            setCategories(data);
        } catch(error){
            console.error(error);
        }
    }

    useEffect(()=>{
        FetchData();
    },[])

    function LoginClick(){
        navigate("login")
    }

    return(
        <div className="container-fluid">
            {/* {
                categories.map(getCategory=>
                    <li key={getCategory}><Link to={`/products/${category}`}>{getCategory.toUpperCase()}</Link></li>  
                )
            } */}
        </div>
    )
}