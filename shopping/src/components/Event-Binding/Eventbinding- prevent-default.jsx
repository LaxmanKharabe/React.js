
export function PreventDefault(){
    return(
        <div className="container-fluid">
            <h3>Event Binding</h3>
            <form onSubmit={(e)=>{alert("Form Submits its data to API"); e.preventDefault()}}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="Name"/></dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="Age"/></dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}