import { useReducer } from "react";
const reducer1 =(state, actions)=>{
    // if(actions.type==='INC'){
    //     return {count: 2};
    // }

    switch(actions.type){
        case 'INC':
            return {count: state.count + 1};
        case 'DEC':
            return {count: state.count - 1}
    }
}
const initialState = {count: 0};

export function ReducerDemo(){
    const [state, dispatch] = useReducer(reducer1, initialState);
    return(
        <div className="container-fluid">
            <p>{state.count}</p>
            <button onClick={()=> dispatch({type: 'INC'})}>Inc</button>
            <button onClick={()=> dispatch({type: 'DEC'})}>Dec</button>
        </div>
    )
}