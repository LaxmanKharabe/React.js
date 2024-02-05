import { useState } from "react"
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function VideoLogin(){

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies('username');
    let navigate = useNavigate();

    function handleNameChange(e){
        setUserName(e.target.value);
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }
    function handleLoginClick(){
        if(password==="admin"){
            setCookie('username', userName, { expires: new Date('2023-09-27')});
            navigate("/videos");
        } else {
            navigate("/error");
        }
    }

    return(
        <div>
            {(navigator.cookieEnabled==true)?"Enabled":"Cookies Disabled on your browser"}
            <h3>User Login</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleNameChange} /></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={handlePasswordChange}/></dd>
            </dl>
            <button onClick={handleLoginClick}>Login</button>
            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </div>
    )
}