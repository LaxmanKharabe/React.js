export function Login(){
    return(
        <div className="container-fluid mt-2 bg-light w-50 p-3">
            <h2>User Login</h2>
            <dl>
                <dt>User name</dt>
                <dd><input type="text"/></dd>
                <dt>Password</dt>
                <dd><input type="password"/></dd>
                <dd><button className="btn btn-primary">Login</button></dd>
            </dl>
        </div>
    )
}