// This component used for Conditional Rendering using component properties
export function DynamicGrid(props){
    if(props.view==="grid"){
        return(
            <div>
                <h2>Grid View</h2>
                <table className="table table-hover w-50">
                   <thead>
                    <tr>
                        <th>Mobile Images</th>
                    </tr>
                   </thead>
                    <tbody>
                        {
                            props.data.map(item=>
                                <tr>
                                    <td>
                                        {item.title}
                                    </td>
                                    <td>
                                        <img width="200" height="200" src={item.image} />
                                    </td>
                                    <td>{item.price}</td>
                                    <td><button className="btn btn-primary">Buy</button></td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    } else if(props.view==="cards") {
        return(
            <div>
                <h2>Card View</h2>
                <div className="d-flex justify-content-between flex-wrap">
                {
                    props.data.map(item=>
                        <div className="card m-2 p-2" style={{width:'200px'}}>
                            <img src={item.image} height="100" className="card-img-top" />
                            <div className="card-body overflow-auto" style={{height:'140px'}}>
                                {item.title}
                            </div>
                            <div className="card-footer">
                                {item.price}
                                <div>
                                    <button className="btn btn-danger bi bi-cart4"> Add to Cart </button>
                                </div>
                            </div>
                        </div>
                       
                        )
                }
                </div>
            </div>
        )
    } else {
        return(
            <div>
                <h4>Please Select a View</h4>
            </div>
        )
    }
   
}