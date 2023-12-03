import './netflix-register.css';
export function NetflixRegister(){
    return(
       <form className="registerContainer">
            <div className="input-group">
                <input type="email" className="cInSty bg-dark text-white" placeholder="Email address"/>
                <button className="btn btn-danger ms-2 cBtSty">Get Started <span className="bi bi-chevron-right"></span></button>
            </div>
       </form>
    )
}