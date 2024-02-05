import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function LinksForOutlet(){
    const [data, setData] =useState('');

    function setDatainCont(){
        setData('Component loaded using Outlet inside this bordered container')
    }
    function EmptyData(){
        setData('')
    }
// useEffect(()=>{

// },[])
    return(
        <div className="container-fluid p-2">
            <h2 className="h2">Nested Route with Outlet</h2>
            <Link to="login" className="btn btn-primary me-2" onClick={setDatainCont}>Login</Link>
            <Link to="register" className="btn btn-primary me-2" onClick={setDatainCont}>register</Link>

            <div className="border border-1 p-4 text-center mt-2">
                <h2 className="h3 text-danger">{data}</h2>
                <Outlet />
                <Link to="/" onClick={EmptyData}>Back to Main Component</Link>
            </div>
        </div>
    )
}