import { useEffect, useState } from "react";
import {DynamicGrid} from "../Data-Grid/dynamic-grid"


export function ConditionalRenderForDynamicGrid(){

    const [viewName, setViewName] = useState('grid');
    const [mobiles, setMobiles] = useState([{img_src:''}]);

    function handleViewChange(e){
        setViewName(e.target.value);
    }
    useEffect(()=>{
        fetch("http://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>{
            setMobiles(data);
        })
    },[]);

    return(
        <div className="container-fluid">
            <div className="mt-2 w-25">
                <label>Select View</label>
                <div>
                    <select onChange={handleViewChange} className="form-select">
                        <option value="-1">Choose View</option>
                        <option value="grid">Grid</option>
                        <option value="cards">Cards</option>
                    </select>
                </div>
            </div>
            <div className="mt-4">
                <DynamicGrid view={viewName} data={mobiles} />
            </div>
        </div>
    )
}