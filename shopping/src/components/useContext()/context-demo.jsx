import { createContext, useContext, useState } from "react";
let UserContext = createContext(null)


export function VideoesComponent(){
    let context = useContext(UserContext);

    return(
        <div className="container-fluid bg-danger text-dark p-3">
            <h4>Video component- {context.UserName }</h4>
        </div>
    )
}

export function HomeComponent(){
    let context = useContext(UserContext);
    return(
        <div className="container-fluid bg-light text-dark p-3">
            <h3>Home component - {context.UserName}</h3>
            <VideoesComponent />
        </div>
    )
}

export function ContextDemo(){
    const [userName, setUserName] = useState('');

    function UserNameHandle(e){
        setUserName(e.target.value);
    }

    return(
        <div className="container-fluid bg-dark text-white p-3">
            <UserContext.Provider value={{UserName: userName}}>
                <h2>Index component- User Name <input type="text" onChange={UserNameHandle}/></h2>
                <HomeComponent /> 

            </UserContext.Provider>
        </div>
    )
}