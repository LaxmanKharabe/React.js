// Directly sending data to last child component

import { createContext, useContext, useState } from "react";

let MyContext = createContext(null);

export function LastChildComponent(){
    const myData = useContext(MyContext);
    return(
        <div className="p-3 d-flex flex-row justify-content-center align-items-center">
            {
                myData.map((data, index)=>
                    <div className="row bg-light text-dark mb-2 w-25 p-2" key={index}>
                        <span>Product: {index + 1}</span>
                        <hr />
                        <span>Product Name: {data.productName}</span>
                        <span>Product Price: {data.price}</span>
                        <span>Product stock: {data.stock}</span>
                    </div>
                )
            }
        </div>
    )
}

export function ChildCOmponent(){
    return(
        <div>
            <LastChildComponent />
        </div>
    )
}

export function PracticeUseContext(){

    const [userData] = useState([{productName: 'Realme 7', price: 15000, stock: 'Available'}, {productName: 'Realme 8', price: 25000, stock: 'Not available'}]);

    return(
        <div className="container-fluid bg-dark text-white p-3" style={{height: '100vh'}}>
            <MyContext.Provider value={userData}>
                <p className="text-center">Dark background is the parent component</p>
                <ChildCOmponent />
            </MyContext.Provider>
        </div>
    )
    
}