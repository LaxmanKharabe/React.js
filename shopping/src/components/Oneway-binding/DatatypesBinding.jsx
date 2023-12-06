
export function DataTypesBinding(){
    var id = 1;
    var name = "Nike Casuals";
    var stock = true;
    var result = 10/3;

    return(
        
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Product Id</dt>
                <dd>{id}</dd>
                <dt>Product Name</dt>
                <dd>{name}</dd>
                
                {/* React boolean types configured with true or false can handle any value only using a condition. */}
                <dt>Stock</dt>
                <dd>
                    <ul>
                        <li>React boolean types configured with true or false can handle any value only using a condition. </li>
                        <li>We can't present boolean "true or false" directly in UI.</li>
                        <li>In order to display boolean true or false, you have to convert it into string.</li>
                    </ul>
                </dd>
                <dd>{(stock==true)? "True" : "False"}</dd>
                <dd>{(stock==true)? "Stock available" : "Stock not available"}</dd>

                {/* If you want to format a number, then you can use "Math" object of JavaScript. */}
                <h2>Numbers</h2>
                <ul>
                    <li>React can display the numeric values directly.</li>
                    <li>If we want to format a number, then you can use "Math" object of JavaScript. </li>
                </ul>
                <dt>Result of 10/3 is: </dt>
                <dd>{Math.round(result)}</dd>
            </dl>
        </div>
    )
}