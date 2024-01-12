import { useEffect, useRef, useState } from "react"

export function UseRefDemo(){
    const [msg, setMsg] = useState('');
    let m1 = useRef(null);
    let m2 = useRef(null);
    let m3 = useRef(null);

    function Message1(){
        setMsg('Message 1');
    }
    function Message2(){
        setMsg('Message 2');
    }
    function Message3(){
        setMsg('Message 3');
    }
    function StartMsg(){
        console.log('Start message clicked')
        m1.current = setTimeout(()=>{Message1()}, 3000);
        m2.current = setTimeout(()=>{Message2()}, 6000);
        m3.current = setTimeout(()=>{Message3()}, 9000);
    }

    function SkipMsg(){
        console.log('Skip message2 clicked')
        clearInterval(m2.current);
    }

    return(
        <div className="container-fluid p-2">
            <button className="btn btn-primary" onClick={StartMsg}>Start</button>
            <button className="btn btn-danger ms-2" onClick={SkipMsg}>Skip message 2</button>
            <p className="h4">{msg}</p>
        </div>
    )
}