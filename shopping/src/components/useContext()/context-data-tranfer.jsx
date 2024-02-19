//Solve prop drilling with UseContext Hooks

import React, { useState, useContext } from "react";

// Create Context first
let context = React.createContext(null);


function Parent() {
	const [fName] = useState("Laxman");
	const [lName] = useState("Kharabe");
	return (
		<context.Provider value={{ fName, lName }} className="border p-5">
			<div>This is a Parent component</div>
			<br />
			<ChildA />
		</context.Provider>
	);
}

function ChildA() {
	const {lName, fName} = useContext(context);
	return (
		<div className="border p-5">
			This is ChildA Component.
			<br />
				<h1>{fName}</h1>
				<h1>{lName}</h1>
			<ChildB />
		</div>
	);
}

function ChildB() {
	return (
		<div className="border p-5">
			This is ChildB Component.
			<br />
			<ChildC />
		</div>
	);
}

function ChildC() {
	const { fName, lName } = useContext(context);
	return (
		<div className="border p-5">
			This is ChildC component.
			<br />
			<h3> Data from Parent component is as follows:</h3>
			<h4>{fName}</h4>
			<h4>{lName}</h4>
		</div>
	);
}

export default Parent;
