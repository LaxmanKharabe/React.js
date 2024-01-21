import React from "react";
import {ClassNavBar} from './class-navbar';

export class ClassLogin extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="container-fluid">
                <ClassNavBar title='Shopper.' items={['Home', 'Contact', 'Login', 'Signup']}/>
            </div>
        )
    }
}