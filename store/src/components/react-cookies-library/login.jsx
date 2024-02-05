import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";

export function CookieLogin(){

    const [cookie, setCookie, removeCookie] = useCookies('cookiename_user', 'password');
    const [user, steUser] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    
    function handleName(e){
        steUser(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }
    function handleLoginClick(){
        if(cookie["cookiename_user"]==undefined){
            navigate("/login");
        }
        if(cookie["cookiename_user"] == user & cookie["password"]==password){
            // navigate("/video");
        }else{
            navigate("/login");
            alert("Please enter valid details or please signup if don't have an account");
        }
    }

    return(
        <div className="container-fluid bg-dark text-white p-5">
            <h3>User Login</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" className="form-control" onChange={handleName}/></dd>
                <dt>Password</dt>
                <dd><input type="password" className="form-control" onChange={handlePassword}/></dd>
                <dd><button className="btn btn-success mt-2" onClick={handleLoginClick}>Login</button></dd>
            </dl>
        </div>
    )
}