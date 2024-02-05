import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VideoHome } from "./VideoChannel-home";
import { VideoLogin } from "./Video-Channel-login";
import { Videos } from "./VideoChannel-Videos";
import { VideoError } from "./Video-Channel-Error";

export function VideoIndex(){
    return(
        <div className="container-fluid">
            <h3 className="bg-dark text-white text-center p-2">Video Channel - Index</h3>
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<VideoHome />} />
                  <Route path="login" element={<VideoLogin />} />
                  <Route path="videos" element={<Videos />} />
                  <Route path="error" element={<VideoError />} />
               </Routes>
            </BrowserRouter>
        </div>
    )
}