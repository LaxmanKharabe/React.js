export function Register(){
    return(
        <div className="container-fluid mt-2 bg-light w-50 p-3">
            <h2>Register User</h2>
            <dl>
                <dt>User name</dt>
                <dd><input type="text"/></dd>
                <dt>Password</dt>
                <dd><input type="password"/></dd>
                <dt>E-mail</dt>
                <dd><input type="email"/></dd>
                <dt>Mobile number</dt>
                <dd><input type="number" /></dd>
                <dd><button className="btn btn-primary">Register</button></dd>
            </dl>
        </div>
    )
}