import { useState } from "react";
import { TwowayBinding } from "../Twoway-binding/TwowayBinding";
import { FackStore } from "../useEffectHook/fakestoreapi";

export function RenCompoOnCondition() {
    const [component, setComponent] = useState(<TwowayBinding />);

    function ChangeCompo(e){
        if(e.target.checked){
            setComponent(<FackStore />);
        }else{
            setComponent(<TwowayBinding />)
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 form-switch">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" onChange={ChangeCompo}/>
                        <label class="form-check-label" for="mySwitch">Dark Mode</label>
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                {component}
            </div>
        </div>
    )
}