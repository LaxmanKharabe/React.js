export function EventBindingPropagation(){
    return(
        <div className="container-fluid">
            <h3>Event Binding</h3>
            <div onClick={()=>{alert("Parent Div Clicked")}} className="bg-dark text-white p-3">
                <p>Parent Element</p>
                <button onClick={(e)=>{alert(`Child Button Clicked.\nRemove the stopPropagation() to check handling Propagation`); e.stopPropagation()}}>Child Element</button>
            </div>
        </div>
    )
}