import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Login } from "../login/login";
import { Register } from "../register/register";

export function RoutingDemo(){
    return(
        <div className="container-fluid text-center mt-4">
            <BrowserRouter>
                <nav>
                    <Link className="btn btn-primary me-2" to="/">Home</Link>
                    <Link className="btn btn-primary me-2" to="icons">Icons</Link>
                    <Link className="btn btn-primary me-2" to="docs">Docs</Link>
                    <Link className="btn btn-primary me-2" to="login">Login</Link>
                    <Link className="btn btn-primary" to="register">Register</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<div className="container-fluid mt-2 bg-light w-50 p-3"><h2>Home Component</h2></div>} />
                    <Route path="icons" element={<div className="container-fluid mt-2 bg-light w-50 p-3"><h2>Icons Component</h2></div>} />
                    <Route path="docs" element={<div className="container-fluid mt-2 bg-light w-50 p-3"><h2>DOCs Component</h2></div>} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path='*' element={<><code>Requested component not found</code></>} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}