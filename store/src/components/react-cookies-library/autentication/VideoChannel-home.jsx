import { Link } from "react-router-dom";

export function VideoHome(){
    return(
        <div>
            <h3>Video Channel - Home</h3>
            <nav>
                <div>
                    <Link to="login">Login</Link>
                </div>
                <div>
                    <Link to="videos">Videos</Link>
                </div>
            </nav>
        </div>
    )
}