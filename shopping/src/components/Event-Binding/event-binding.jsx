import { useState } from "react"

export function EventBinding(){

    const [msg, setMsg] = useState('');

    function dataOperations(e){
        switch(e.target.name){
            case "Insert":
            setMsg("Record Inserted");
            break;
            case "Update":
            setMsg("Record Updated");
            break;
            case "Delete":
            setMsg("Record Deleted");
            break;
        }
    }

    return(
        <div className="container-fluid">
            <h3>Event Binding</h3>
            <button onClick={dataOperations} name="Insert">Insert</button>
            <button onClick={dataOperations} name="Update">Update</button>
            <button onClick={dataOperations} name="Delete">Delete</button>
            <p>{msg}</p>
        </div>
    )
}