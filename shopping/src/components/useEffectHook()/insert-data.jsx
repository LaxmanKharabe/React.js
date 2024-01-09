import { useEffect } from "react"

export function InsertRecord(){
    useEffect(()=>{
        console.log('Connected');
        return ()=> {
            console.log('Disconnected after render')
        }
    }, [])
    return(
        <div className="container-fluid">
            Record Inserted
        </div>
    )
}

export function DeleteRecord(){
    useEffect(()=>{
        console.log('Connected');
        return ()=> {
            console.log('Disconnected after render')
        }
    }, [])
    return(
        <div className="container-fluid">
            Record Deleted
        </div>
    )
}