import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookieHome } from "./home";
import { CookieLogin } from "./login";
import { CookieVideo } from "./video";
import { CookieLogout } from "./logout";
import { CookieSugnUp } from "./signup";

export function CookiesRoutes(){

    return(
        <div className="container-fluid">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CookieHome />}>
                        <Route path="signup" element={<CookieSugnUp />} />
                        <Route path="login" element={<CookieLogin />} />
                        <Route path="logout" element={<CookieLogout />} />
                    </Route>
                    <Route path="video" element={<CookieVideo />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}