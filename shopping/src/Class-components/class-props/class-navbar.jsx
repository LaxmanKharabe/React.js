import React from "react";
export class ClassNavBar extends React.Component{

    constructor(props){
        super();
    }

    render(){
        return(
            <div className="container-fluid p-4">
                <nav className="bg-light p-3 d-flex justify-content-between">
                    <div>{this.props.title}</div>
                    <div>
                        {
                            this.props.items.map(item=>
                                <span className="me-2 btn-link d-inline-block" key={item}>{item}</span>    
                            )
                        }
                    </div>
                </nav>
            </div>
        )
    }
}