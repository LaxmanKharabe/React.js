import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"

export function CookieSugnUp(){

    const [cookie, setCookie, removeCookie] = useCookies('cookiename_user', 'password');
    const [user, steUser] = useState('');
    const [passwords, setPasswords] = useState('');
    
    function handleName(e){
        steUser(e.target.value);
    }
    function handlePassword(e){
        setPasswords(e.target.value);
    }

    function submitDetails(e){
        setCookie('cookiename_user', user); 
        setCookie('password', passwords); 

        steUser('');
        setPasswords('');
    }
    return(
        <div className="container-fluid bg-dark text-white p-5">
            <h3>User Login</h3>
            <dl>
                <dt>Enter User Name</dt>
                <dd><input type="text" name="username" className="form-control" onChange={handleName}/></dd>
                <dt>Enter Password</dt>
                <dd><input type="password" name="pass" className="form-control" onChange={handlePassword}/></dd>
                <dd><button className="btn btn-success mt-2" onClick={submitDetails}>Signup</button></dd>
            </dl>
        </div>
    )
}