import { useEffect, useState } from "react"

export function UseEffectDependencyEx(){

    const [count, setCount] = useState(0);
    useEffect(()=>{
        // Mount phase 
        if(count >= 0){
            console.log(`useEffect executed and count is: ${count}`);
        }else{
            console.log(`useEffect executed again and now count is: ${count}`)
        }
        // unmount phase
        return ()=>{
            console.log("clear");
        };
    },[count])

    return(
        <div className="container-fluid">
            <p>{count}</p>
            <button onClick={()=> setCount(count+1)}>Increase count</button>        
        </div>
    )
}