import { useEffect } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";


export function Videos(){

    const [cookies, setCookie, removeCookie] = useCookies('username');
    let navigate = useNavigate();

    useEffect(()=>{
        if(cookies['username']==undefined){
            navigate("/login");
        }
    },[])

    function handleSignoutClick(){
        removeCookie('username');
        navigate('/');
    }

    return(
        <div>
            <h3> {cookies['username']} -  Browse Videos - <button onClick={handleSignoutClick} className="btn btn-link">Signout</button> </h3>
            <iframe src="https://www.youtube.com/embed/DeEszXEewHs" width="400" height="300">

            </iframe>
        </div>
    )
}