
export function DataGrid2(props){
    return(
        <div className="container-fluid">
            <h1>Data Grid Example</h1>
            <table className="table table-hover caption-top table-responsive">
                <caption>{props.caption}</caption>
                <thead>
                    <tr>
                        {
                            props.fields.map(field=>
                                <th key={field} className="table-light">{field} 
                                    {/* <span className="bi bi-filter btn"></span>  */}
                                    <span className="bi bi-sort-alpha-down btn"></span>
                                </th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((item, ind)=>
                            <tr key={ind}>
                                {
                                    Object.keys(item).map((itemKey)=>
                                        <td key={itemKey}>{item[itemKey]}</td>    
                                    )
                                }
                            </tr>    
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}