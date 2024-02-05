import { Link, Outlet } from "react-router-dom";

export function CookieHome(){


    return(
        <div className="container-fluid">
            <nav className="bg-dark text-white text-center ps-4 pe-4 pb-2 pt-2 d-flex justify-content-between mb-2">
                <h3>Home component</h3>
                <div>
                    <Link to="login" className="btn btn-link me-2">Login</Link>
                    <Link to="signup" className="btn btn-link me-2">Sign-Up</Link>
                    <Link to="video" className="btn btn-link me-2">Video</Link>
                </div>
            </nav>
            <div className="d-flex justify-content-center p-2">
                <div className="col-4"></div>
                <div className="col-4"><Outlet /></div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}