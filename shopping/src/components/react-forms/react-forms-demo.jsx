import { useState } from "react";

const ReactFormsDemo = () =>{

    const [getData, setData] = useState({Name: '', Age: 0, City: ''});
    const[error, setError] = useState();
    function handleName(e){
        setData({
            Name: e.target.value,
            Age: getData.Age,
            City: getData.City
        })
    }
    function handleAge(e){
        setData({
            Age: e.target.value,
            Name: getData.Name,
            City: getData.City
        })
    }
    function handleCity(e){
        setData({
            City: e.target.value,
            Age: getData.Age,
            Name: getData.Name
        })
    }

    function emptyAgeValidation(){
        if(getData.Age === 0){
            console.log(typeof(getData.Age))
            setError("Please enter age");
        }else{
            setError("");
        }
    }
    function emptyNameValidation(){
        if(getData.Name=== ""){
            setError("Please Enter Name");
        }else{
            setError("");
        }
    }

    function handleData(e){
        e.preventDefault();
        emptyNameValidation();
        emptyAgeValidation();
        console.log(getData)
    }

    return(
        <div className="container-fluid">
            <form className="col-5">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="nameTxt" onChange={handleName}/>
                    <p className="text-danger">{error}</p>
                </div>
                <div className="mb-3">
                    <label className="form-check-label">Age</label>
                    <input type="number" className="form-control" id="ageNum"onChange={handleAge} />
                    <p className="text-danger">{error}</p>
                </div>
                <div className="mb-3">
                    <label className="form-label">City</label>
                    <select id="selectBox" className="form-select" onChange={handleCity}>
                        <option>Select city</option>
                        <option>Pune</option>
                        <option>Hyd</option>
                        <option>Mumbai</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleData}>Submit</button>
            </form>
        </div>
    )
}

export default ReactFormsDemo;