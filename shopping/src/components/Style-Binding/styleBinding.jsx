import { useEffect } from "react"
import { useState } from "react"

export function StyleBinding(){
    const [styleObjet, setStyleObject] = useState({backgroundColor: '', boxShadow: '', border: '', width: '', height: ''})
    useEffect(()=>{
        setStyleObject(
            {
                width: '200px',
                height: '200px',
                backgroundColor: 'lightgray',
                border: '2px solid black',
                boxShadow: '2px 2px 2px black',
            }
        )
    },[])
    return(
        <div style={{border: '2px solid black', marginTop: '5px', marginLeft: '5px'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{backgroundColor: 'pink', height: '65px'}}>Item 1</div>
                <div style={{backgroundColor: 'yellow', height: '65px'}}>Item 2</div>
                <div style={{backgroundColor: 'gray', height: '65px'}}>Item 3</div>
            </div>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px', marginBottom: '10px'}}>
                <div style={{backgroundColor: 'pink', height: '65px'}}>Item 1</div>
                <div style={{backgroundColor: 'yellow', height: '65px'}}>Item 2</div>
                <div style={{backgroundColor: 'gray', height: '65px'}}>Item 3</div>
            </div>

            <div style={{display: 'flex', marginBottom: '10px', marginLeft: '10px'}}>
                <div style={styleObjet}></div>
                <div style={styleObjet}></div>
                <div style={styleObjet}></div>
            </div>
        </div>
        
    )
}