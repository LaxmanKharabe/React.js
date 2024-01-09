// Example: With using Prop Drilling: 

/* Prop drilling is basically a situation when the same data is being sent at almost
every level due to requirements in the final level. */

import React, { useEffect, useState } from "react";

function Parent() {
	const [fName, setfName] = useState("");
	const [lName, setlName] = useState("");

    useEffect(()=>{
        setfName('Laxman')
        setlName('Kharabe')
    },[])
	return (
		<div className="container-fluid bg-light border border-2 border-danger text-dark p-3">
            <h2>This is a Parent component</h2>
            <ChildA fName={fName} lName={lName} />
        </div>
	);
}

function ChildA({ fName, lName }) {
	return (
        <div className="container-fluid border border-2 border-primary mb-4">
            <h3>This is ChildA Component.</h3>
			<ChildB fName={fName} lName={lName} />
        </div>
	);
}

function ChildB({ fName, lName }) {
	return (
        <div className="container-fluid border border-2 border-success mb-4">
            <h4>This is ChildB Component.</h4>
			<ChildC fName={fName} lName={lName} />
        </div>
	);
}

function ChildC({ fName, lName }) {
	return (
		<div className="container-fluid border border-2 border-warning mb-4">
            <h5>This is ChildC component.</h5>
			<h5> Data from Parent component is as follows:</h5>
			<h5>{fName}</h5>
			<h5>{lName}</h5>
        </div>
	);
}

export default Parent;
