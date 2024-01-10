import { useReducer } from 'react';
import './styles.css';

const initialState = {Name: 'Laxman', Age: '25', Course: 'React js'};
const reducer =(state, action)=>{
    switch(action.type){
        case "UserName":
            // return {Name:action.uName, Age:state.Age, Course:state.Course};
            return { ...state, Name: action.uName };
        case "UserAge":
            // return {Age:action.uAge, Name:state.Name, Course:state.Course};
            return { ...state, Age: action.uAge };
        case "UserCourse":
            // return {Course:action.uCourse, Name:state.Name, Age:state.Age};
            return { ...state, Course: action.uCourse };
        
        case "Add":
            console.log ([{ ...state[0], Course: action.uCourse }]);
        default:
            return state;
    }
}
export function UseReducerExample(){
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <div className="container-fluid bg-dark p-3 custom-height">
            <form>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 mb-1">
                        <input type="text" placeholder="User Name" className="form-control" onChange={(e) => dispatch({ type: 'UserName', uName: e.target.value})}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 mb-1">
                        <input type="text" placeholder="User Age" className="form-control" onChange={(e) => dispatch({ type: 'UserAge', uAge: e.target.value})}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 mb-1">
                        <input type="text" placeholder="User Course" className="form-control" onChange={(e) => dispatch({ type: 'UserCourse', uCourse: e.target.value})}/>
                    </div>
                </div>
            </form>
            <div className="buttons mt-3 mb-3 d-flex justify-content-between">
                <div className="d-flex gap-2 w-25">
                    <button className='btn btn-success custom-width' onClick={() => dispatch({ type: 'Add'})}>Add</button>
                    <button className='btn btn-danger custom-width' onClick={() => dispatch({ type: 'Remove'})}>Remove</button>
                </div>
                <p className='text-white'>Add the records in below table</p>
            </div>
            <table className="table table-hover table-bordered">
                <thead className='table-light'>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{state.Name}</td>
                        <td>{state.Age}</td>
                        <td>{state.Course}</td>
                    </tr>
                    
                    {/* {
                        state.map((data,ind)=>
                            <tr key={ind}>
                                <td>{data.Name}</td>
                                <td>{data.Age}</td>
                                <td>{data.Course}</td>
                            </tr>    
                        )
                    } */}
                </tbody>
            </table>
        </div>
    )
}