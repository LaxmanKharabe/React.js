import React from "react";
import { useState } from "react";

export function UseState() {

    const [getter, setter] = useState("Laxman");
    const [data] = useState([
        { "Category": "Electronics", "Products": ["TV", "Fan", "Laptop"] },
        { "Category": "Footwear", "Products": ["Casuals", "Sneakers", "Boots"] },
        { "Category": "Furniture", "Products": ["Box", "Chair", "Table"] },
    ])
    return (
        <div>
            <h1 className="ms-2">Hellow {getter} !</h1>

            <div className="container-fluid">

                <select className="form-select w-25">
                    {
                        data.map((categories, cIndex) =>
                            <optgroup label={categories.Category} key={cIndex}>
                                {
                                    categories.Products.map((product, pIndex) =>
                                        <option value={product} key={pIndex}>{product}</option>
                                    )
                                }
                            </optgroup>
                        )
                    }
                </select>

                {/* <dl className="ms-5">
                {
                    data.map((cate, cateIndex) =>
                        <React.Fragment>
                            <dt key={cateIndex} className="d-inline-block me-3">{cate.Category}</dt>
                            {cate.Products.map((prod, prodIndex) =>
                                <dd key={prodIndex}>{prod}</dd>
                            )}
                        </React.Fragment>
                    )
                }
            </dl> */}
                <dl className="mt-3">
                    {
                        data.map((cate, cateIndex) =>
                            <div className="d-inline-block me-3">
                                <dt key={cateIndex}>{cate.Category}</dt>
                                {cate.Products.map((prod, prodIndex) =>
                                    <dd key={prodIndex} className="text-center">{prod}</dd>
                                )}
                            </div>
                        )
                    }
                </dl>

                <form className="form w-25 p-4 mb-4">
                    {
                        data.map((checData, checDataIndex) =>
                            <div className="form-check">
                                <label htmlFor={checData.Category} className="orm-check-label fw-bold">{checData.Category}</label>
                                <input type="checkbox" className="form-check-input" key={checDataIndex} id={checData.Category} />
                                {
                                    checData.Products.map((checProd, checProdIndex) =>
                                        <div className="form-check">
                                            <label htmlFor={checProd} className="orm-check-label">{checProd}</label>
                                            <input type="checkbox" className="form-check-input" key={checProdIndex} id={checProd} />
                                        </div>
                                    )
                                }

                            </div>
                        )
                    }
                </form>
            </div>
        </div>
    )
}