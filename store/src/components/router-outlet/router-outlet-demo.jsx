import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../login/login";
import { Register } from "../register/register";
import { Home } from "../home/home";


export function RouterOutletDemo(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
     )
}