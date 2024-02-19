import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";


const reducer = (state, actions) =>{
    switch(actions.type){
        case "INC":
            return {count: state.count + 1};
        case "DEC":
            return {count: (state.count >0)? state.count- 1: 0};
        default:
            return state;
    }
}
let initialValue = {count: 0};

export function ReducerDemo(){
    const [state, dispatch] = useReducer(reducer, initialValue);
    return(
        <div className="container-fluid">
            {state.count} <br />
            <button onClick={()=>{dispatch({type: "INC"})}}>Counter INC</button>
            <button onClick={()=>{dispatch({type: "DEC"})}}>Counter DEC</button>
        </div>
    )
}


const reducer1 =(state, actions)=>{
//     switch(actions.type){
//         case 'INC':
//             return {count: state.count + 1};
//         case 'DEC':
//             return {count: state.count - 1}
//     }
// }
// const initialState = {count: 0};

// export function ReducerDemo(){
//     const [state, dispatch] = useReducer(reducer1, initialState);
//     return(
//         <div className="container-fluid">
//             <p>{state.count}</p>
//             <button onClick={()=> dispatch({type: 'INC'})}>Inc</button>
//             <button onClick={()=> dispatch({type: 'DEC'})}>Dec</button>
//         </div>
//     )

}