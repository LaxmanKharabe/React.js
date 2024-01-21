import React from "react";

export class ClassEventsDemo extends React.Component{
    constructor(){
        super();
    }
    handleClick(){
        alert('This is click event');
    }

    render(){
        return(
            <div className="container-fluid">
                <button className="btn btn-primary" onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}