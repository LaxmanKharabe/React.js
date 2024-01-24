import { useFormik } from "formik";

export function FormikDemo(){
    const formik = useFormik({
        initialValues: {
            Name: '',
            Age: 0,
            Mobile: '',
            City: ''
        },
        onSubmit: (value) => {
            console.log(JSON.stringify(value));
        }
    })

    return(
        <div className="container-fluid">
            <form className="row" onSubmit={formik.handleSubmit}>
                <dl className="col-4">
                    <dt>User Name</dt>
                    <dd><input type="text" name="Name" onChange={formik.handleChange} className="form-control"/></dd>
                    <dt>Age</dt>
                    <dd><input type="text" name="Age" onChange={formik.handleChange} className="form-control"/></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} className="form-control"/></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} className="form-select">
                            <option value="-1">Select city</option>
                            <option value="Hyd">Hyd</option>
                            <option value="Pune">Pune</option>
                            <option value="Mumbai">Mumbai</option>
                        </select>
                    </dd>
                    <button type="submit" className="form-control btn btn-primary">Submit</button>
                </dl>
                <dl className="col-6">
                    <dt>User Name</dt>
                    <dd>{formik.values.Name}</dd>
                    <dt>Age</dt>
                    <dd>{formik.values.Age}</dd>
                    <dt>Mobile number</dt>
                    <dd></dd>
                    <dt>City</dt>
                    <dd>{formik.values.City}</dd>
                </dl>
            </form>
        </div>
    )
}