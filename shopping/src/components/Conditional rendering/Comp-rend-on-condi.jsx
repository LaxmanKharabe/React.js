import { useState } from "react"
import { Login } from "../Loging/loging";
import { NetflixRegister } from "../netflix/netflix-register";

export function ConditionalRender(){

    const [component, setComponent] = useState('');

    function handleNavClick(e){
        if(e.target.id==='login'){
            setComponent(<Login />);
        } else {
            setComponent(<NetflixRegister />);
        }
    }

    return(
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-top mt-4" style={{height:'100vh'}}>
                <div className="w-50">
                    <ul className="nav nav-tabs">
                        <li className="nav-item active"><a  id='login' href="#" onClick={handleNavClick} className="nav-link active">Login</a></li>
                        <li className="nav-item"><a id='register' href="#" onClick={handleNavClick} className="nav-link">Register</a></li>
                    </ul>
                    <div className="mt-4 p-4">
                        {component}
                    </div>
                </div>
            </div>
        </div>
    )
}