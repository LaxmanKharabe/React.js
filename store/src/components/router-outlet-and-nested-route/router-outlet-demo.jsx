import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../login/login";
import { Register } from "../register/register";
import { LinksForOutlet } from "./links-outlet";


export function RouterOutletDemo(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <Routes>
                    {/* Nested Route */}
                    <Route path="/" element={<LinksForOutlet />}> 
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
     )
}