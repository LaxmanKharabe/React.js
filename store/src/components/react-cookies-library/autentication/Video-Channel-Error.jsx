import { Link } from "react-router-dom";

export function VideoError(){
    return(
        <div>
            <h3 className="text-danger">Error:Invalid User Credentials</h3>
            <Link to="/login">Try Again</Link>
        </div>
    )
}