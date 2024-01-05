import { useEffect, useState } from "react"


function ViewComponent(props){
    return (
        <label>{props.UserName}</label>
    )
}
function EditComponent(props){
    return(
        <input type="text"  value={props.UserName} />
    )
}

export function ConditionalRendering(){

    const [userName, setUserName] = useState('John');
    const [btnText, setBtnText] = useState('Edit');
    const [component, setComponent] = useState('');

    useEffect(()=>{
        setComponent(<ViewComponent UserName={userName} />)
    },[]);

    function ToggleComponent(){
        if(btnText==="Edit"){
            setBtnText("Save");
            setComponent(<EditComponent UserName={userName} />)
        } else {
            setBtnText("Edit");
            setComponent(<ViewComponent UserName={userName} />)
        }
    }

    return(
        <div className="container-fluid">
            <h3>User Details  </h3>
            <table className="table table-hover w-50">
                <tbody>
                   <tr>
                    <td>Your Name</td>
                    <td> {component} </td>
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