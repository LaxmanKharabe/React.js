import { useEffect } from "react";
import { useState } from "react"
import './event-binding.css';

export function MouseOverEvent() {

    const [mobiles, setMobiles] = useState([{ img_src: '' }]);
    const [preview, setPerview] = useState('images/m1.png');

    useEffect(() => {
        fetch("mobile.json")
            .then(res => res.json())
            .then(pics => {
                setMobiles(pics);
            })
    }, []);

    function DisplayImage(e) {
        setPerview(e.target.src);
    }

    return (
        <div className="container-fluid">
            <h2>iPhones</h2>
            <div className="row">
                <div className="col-1 border border-1 p-0">
                    {
                        mobiles.map(mobile =>
                            <div className="mb-4 border border-primary border-1" style={{ width: '' }}>
                                <img src={mobile.img_src} width="95" height="95" onMouseOver={DisplayImage} />
                            </div>
                        )
                    }
                </div>
                <div className="col-11">
                    <img width="100" src={preview} height="100" />
                </div>
            </div>
        </div>
    )
}