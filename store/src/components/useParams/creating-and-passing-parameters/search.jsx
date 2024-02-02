import { useParams } from "react-router-dom"

export function Search(){
    let params = useParams();
    return(
        <div className="container-fluid">
            <h3>Search results</h3>
            Category Name: {params.category} <br /> 
            Size: {params.size}
        </div>
    )
}