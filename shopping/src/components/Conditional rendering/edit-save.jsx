import { useState } from "react"

export function EditComp(props){
    return(
        <span className="h4">{props.UserName}</span>
    )
}
export function SaveComp(props){
    return(
        <span><input type="text" className="me-2 form-control" value={props.UserName}/></span>
    )
}
export function EditSave(){
    const[UserName, setUserName] = useState('Laxman');
    const[btnTxt, setBtnTxt] = useState('Edit')
    const[rednComponent, setRenComponent] = useState('');

    function ChangeCompo(){
        if(btnTxt==='Edit'){
            setBtnTxt('Save');
            setRenComponent(<SaveComp UserName={UserName}/>)

        }else{
            setBtnTxt('Edit');
            setRenComponent(<EditComp  UserName={UserName}/>)
        }
    }

    useState(()=>{
        setRenComponent(<EditComp  UserName={UserName}/>)
    },[])
    return(
        <div className="container-fluid">
            <div className="row p-2">
                <div className="col-3 d-flex">
                    <span className="h4">User Name is: <label>{rednComponent}</label></span> 
                </div>
                <div className="col-3">
                    <button className="btn btn-danger" onClick={ChangeCompo}>{btnTxt}</button>
                </div>
            </div>
        </div>
    )
}