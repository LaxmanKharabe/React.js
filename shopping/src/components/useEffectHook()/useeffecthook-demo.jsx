import { useEffect, useState } from "react";
import { DeleteRecord, InsertRecord } from "./insert-data";

export function LogInComp(){

    useEffect(()=>{
        // alert('Login Mounted');
        console.log('Login Mounted');
        return()=>{
            // alert("Login Unmounted");
            console.log("Login Unmounted");
        }
    })

    return(
        <div className="container-fluid">
            <h3>Login Component</h3>
        </div>
    )
}

export function RegisterCompo(){
    useEffect(()=>{
        // alert('Register Mounted');
        console.log('Register Mounted');
        return()=>{
            // alert("Register Unmounted");
            console.log("Register Unmounted");
        }
    })
    return(
        <div className="container-fluid">
            <h3>Register Component</h3>
        </div>
    )
}

export function UseEfeectHook(){
const [component, setComponent] = useState(<LogInComp />)

    function handleLogin(){
        setComponent(<LogInComp />)
    }
    function handleRegister(){
        setComponent(<RegisterCompo />)
    }

    function handleInser(){
        setComponent(<InsertRecord />)
    }
    function handleDelete(){
        setComponent(<DeleteRecord />)
    }
    return(
        <div className="container-fluid">
            {/* <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
            <hr />
            {component} 
            <hr />*/}
            <button onClick={handleInser}>Insert</button>
            <button onClick={handleDelete}>Delete</button>
            <hr />
            {component}
        </div>
    )
}