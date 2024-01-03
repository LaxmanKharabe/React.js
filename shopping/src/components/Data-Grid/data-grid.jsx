export function DataGrid(props){
    return(
        <div className="container-fluid table-responsive">
            <table className={`table table-hover caption-top ${props.theme}`}>
                <caption>{props.caption}</caption>
                <thead>
                    <tr>
                        {
                            props.fields.map(field=>
                                <th key={field}>{field} <button className="bi bi-sort-alpha-down btn btn"></button> </th>
                                )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map(item=>
                            <tr key={item}>
                                {
                                    Object.keys(item).map(key=>
                                        <td key={key}>{item[key]}</td>
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