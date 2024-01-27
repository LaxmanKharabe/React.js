import { useFormik } from "formik";
const FormikValidate = () =>{

    let validateUserName = (FormCollection) =>{
        let error = {};
        if(FormCollection.UserName === ""){
            error.UserName = "Name required"
        }else{
            if(FormCollection.UserName.length < 4){
                error.UserName = "Name too short"
            }else{
                FormCollection.UserName = "";
            }
        }
        return error;
    }

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: 0,
            Mobile: '',
            City: ''
        },
        validate: validateUserName,
        onSubmit: (values)=>{
            alert(JSON.stringify(values));
        }
    })

    return(
        <div className="container-fluid">
            <form className="col-5" onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="nameTxt" onChange={formik.handleChange}/>
                    <p className="text-danger">{formik.errors.UserName}</p>
                </div>
                <div className="mb-3">
                    <label className="form-check-label">Age</label>
                    <input type="number" className="form-control" id="ageNum" onChange={formik.handleChange} />
                    {/* <p className="text-danger">{formik.errors.Age}</p> */}
                </div>
                <div className="mb-3">
                    <label className="form-check-label">Mobile</label>
                    <input type="text" className="form-control" id="Mobile" onChange={formik.handleChange} />
                    {/* <p className="text-danger">{formik.errors.Mobile}</p> */}
                </div>
                <div className="mb-3">
                    <label className="form-label">City</label>
                    <select id="selectBox" className="form-select" onChange={formik.handleChange}>
                        <option>Select city</option>
                        <option>Pune</option>
                        <option>Hyd</option>
                        <option>Mumbai</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default FormikValidate;