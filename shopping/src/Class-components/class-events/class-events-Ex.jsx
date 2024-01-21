import React from "react";

export class ClassEveExample extends React.Component{
    constructor(){
        super();
        this.state={
            message: ''
        }
        this.InsertClick = this.InsertClick.bind(this);
        console.log(this)
    };
    InsertClick(){
        console.log(this)
        this.setState({
            message: 'Record Inserted'
        })
    }
    DeleteClick(){
        this.setState({
            message: 'Record Deleted'
        })
    }
    WithoutBind(){
        this.setState({
            message: 'Without Bind Method setting values using setState'
        })
    }
    // without bind using the arrow function
    //Arrow functions automatically capture the 'this' context from the surrounding scope
    WithoutBindArrow =()=>{
        this.setState({
            message: 'Without Bind Method setting values using setState with Arrow method'
        })
    }
    render(){
        return(
            <div className="container-fluid p-3 bg-light">
                <button className="btn btn-primary me-3" onClick={this.InsertClick}>Insert Click</button>
                <button className="btn btn-primary me-3" onClick={this.DeleteClick.bind(this)}>Delete Click</button>
                <button className="btn btn-primary me-3" onClick={()=>{this.WithoutBind()}}>Without Bind Method</button>
                <button className="btn btn-primary me-3" onClick={()=>{this.WithoutBindArrow()}}>Without Bind Method1</button>
                
                <p className="mt-3">{this.state.message}</p>
            </div>
        )
    }
}