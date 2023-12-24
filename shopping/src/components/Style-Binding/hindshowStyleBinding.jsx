import { useEffect } from "react"
import { useState } from "react"

export function HideShow(){
    const [styleObjet, setStyleObject] = useState({display: 'none'});
    function previewChange(e){
        if(e.target.checked){
            setStyleObject(
                {
                    display: 'block'
                }
            )
        }else{
            setStyleObject(
                {
                   display: 'none' 
                }
            )
        }
    } 
    useEffect(()=>{
        previewChange()
    },[])
    return(
        <div>
            <div className="container-fluid">
                <h2>Product Details</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>iphone14 Black</dd>
                    <dt>
                        <span className="me-2">Preview</span> 
                        <span className="from-switch">
                            <input type="checkbox" onChange={previewChange} name="" className="form-check-input" id="" />
                        </span>
                    </dt>
                    <dd style={styleObjet}>
                        <img src="iphone14Black.png" alt="" />
                    </dd>
                </dl>
            </div>
        </div>
        
    )
}