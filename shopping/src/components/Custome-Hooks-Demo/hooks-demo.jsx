import { useCaptch } from "../../Hooks/captcha.hook";
export function HooksDemo() {
    const captcha = useCaptch();

    return (
        <div className="container-fluid w-25 bg-dark p-3 pb-4 mt-5 text-white">
            User Login
            <hr />
            <form>
                <div className="userName form-group">
                    <label htmlFor="userName">User name</label>
                    <input type="text" id="userName" className="form-control" />
                </div>
                <div className="userPassword form-group">
                    <label htmlFor="userPassword">Password</label>
                    <input type="password" id="userPassword" className="form-control" />
                </div>
                <div className="captcha form-group">
                    <label>Captcha</label>
                    <label className="form-control">{captcha}</label>
                </div>
                <div className="submit mt-3">
                    <button className="form-control text-black btn bg-white">Submit</button>
                </div>
            </form>
        </div>
    );
}
