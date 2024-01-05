// Conditional Render without explicit components

import { useEffect, useState } from "react"


export function RenderDemo(){

    const [userName, setUserName] = useState('John');
    const [btnText, setBtnText] = useState('Edit');
    const [component, setComponent] = useState('');

    useEffect(()=>{
       
    },[]);

    function ToggleComponent(){
        if(btnText==="Edit") {
            setBtnText("Save");
        } else {
            setBtnText("Edit");
        }
    }

    function NameChange(e){
        setUserName(e.target.value);
    }

    return(
        <div className="container-fluid">
            <h3>User Details  </h3>
            <table className="table table-hover w-50">
                <tbody>
                   <tr>
                    <td>Your Name</td>
                    <td>
                        {
                            (btnText==="Edit")?<label onDoubleClick={ToggleComponent}>{userName}</label>:<input type="text" onChange={NameChange} value={userName} />
                        }
                     </td>
                    <td>
                        <button onClick={ToggleComponent} className="btn btn-primary me-2"> {btnText} </button>
                        <button className="btn btn-danger">Cancel</button>
                    </td>
                   </tr>
                </tbody>
            </table>
        </div>
    )
}