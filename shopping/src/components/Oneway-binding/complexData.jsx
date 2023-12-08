export function ComplexDataBinding() {
    var categories = ['All', 'Electronics', 'Footwear', 'Fashion'];
    var numData = [[10, 20, 30], [40, 50, 60]];
    var menu = [
        { "Category1": "Electronics", "Products": ["TV", "Mobile", "Watch"] },
        { "Category1": "Footwear", "Products": ["Casuals", "Sneakers", "Boots"] }
    ];

    return (
        <>
            <select className="form-select w-25 mt-4 mb-4">
                {categories.map(category =>
                    <option value={category} key={category}>{category}</option>
                )}
            </select>

            <table className="table table-bordered mt-4 mb-4">
                <tbody>
                    {numData.map((data, index) => (
                        <tr key={index}>
                            {data.map((value, innerIndex) => (
                                <td key={innerIndex}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <select className="form-select w-25 mt-4 mb-4">
                {menu.map(item =>
                    <optgroup label={item.Category1} key={item.Category1}>
                        {item.Products.map(product =>
                            <option key={product}>{product}</option>
                        )}
                    </optgroup>
                )}
            </select>
            <table className="table table-bordered mt-4 mb-4">
                <thead>
                    <tr>
                        {menu.map((theadData, hedIndex) => (
                            <th key={hedIndex}>{theadData.Category1}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {menu.map((tbbody, tbIndex) => (
                            <td key={tbIndex}>
                                {tbbody.Products.map((tblData, tblDataIndex) => (
                                    <div key={tblDataIndex}>{tblData}</div>
                                ))}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </>
    );
}
