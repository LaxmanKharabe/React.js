import React, { useEffect, useState } from "react";

const PracticePropsParent = () => {
    const [alldata, setData] = useState([{ Title: '', Price: 0 }])
    fetch('dummy.json')
        .then(res => res.json())
        .then(data => {
            setData(data);
        });
    return (
        <React.Fragment>
            <div className="bg-dark text-white p-3">
                {/* <PropsComponent propData={alldata} buttonClass="btn btn-primary" /> */}
                <PropsComponent propData={alldata} />
            </div>
        </React.Fragment>
    );
};

export default PracticePropsParent;


// export function PropsComponent(props) {
export function PropsComponent({propData}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {/* {props.propData.map((fetchedData, index) => ( */}
                {propData.map((fetchedData, index) => (
                    <tr key={index}>
                        <td>{fetchedData.Title}</td>
                        <td>{fetchedData.Price}</td>
                    </tr>
                ))}
            </tbody>
            {/* <button className={props.buttonClass}>Submit</button> */}
        </table>
    )
}
