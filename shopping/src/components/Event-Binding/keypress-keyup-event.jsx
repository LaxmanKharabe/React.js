import { useState } from "react"

export function KeyPressKeyUpEvents(){

    const [error, setError] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [pwdError, setPwdError] = useState('');

    function VerifyUserName(e){
        fetch("data/user.json")
        .then(res=>res.json())
        .then(users=>{
            for(var user of users){
                if(user.UserName===e.target.value){
                    setError('User Name Taken - Try Another');
                    setErrorClass('text-danger');
                    break;
                } else {
                    setError('User Name Available');
                    setErrorClass('text-success');
                }
            }
        })
    }
    function VerifyPassword(e){
        if(e.which>=65 && e.which<=90){
            setPwdError('Warning : Caps ON');
        } else {
            setPwdError('');
        }
    }
    return(
        <div className="container-fluid">
            <h3>Register User</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp={VerifyUserName} /></dd>
                <dd className={errorClass}> {error} </dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyPress={VerifyPassword} /></dd>
                <dd className="text-warning">{pwdError}</dd>
            </dl>
        </div>
    )
}