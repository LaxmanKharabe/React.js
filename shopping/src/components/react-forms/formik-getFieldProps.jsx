// This will not submit the form. Just an example for getFieldProps()
import { Form, useFormik } from "formik";

export function FormikGetFieldProps(){

    function ValidateUser(FormCollection){
        var errors = {};

        if(FormCollection.UserName==""){
            errors.UserName = "User Name Required";
        } else {
            if(FormCollection.UserName.length<4){
                errors.UserName = "Name too short.. min 4 chars";
            } else {
                errors.UserName = "";
            }
        }

        if(FormCollection.Age==""){
            errors.Age = "Age Required";
        } else {
            if(isNaN(FormCollection.Age)){
                errors.Age = "Age must be a Number";
            } else {
                errors.Age = "";
            }
        }

        if(FormCollection.Mobile==""){
            errors.Mobile = "Mobile Required";
        } else {
            if(FormCollection.Mobile.match(/\+91\d{10}/)) {
                errors.Mobile = "";
            } else {
                errors.Mobile = "Invalid Mobile : +91 and 10 digits"
            }
        }

        if(FormCollection.City=="-1"){
            errors.City = "Please Select Your City";
        } else {
            errors.City = "";
        }

        return errors;
    }


    const formik = useFormik({
         initialValues: {
             UserName:'',
             Age: 0,
             Mobile:'',
             City:''
         },
         validate : ValidateUser,
         onSubmit: (values)=>{
            alert(JSON.stringify(values));
         }
    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...formik.getFieldProps("UserName")} name="UserName" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" {...formik.getFieldProps("Age")} name="Age" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" {...formik.getFieldProps("Mobile")} name="Mobile" /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" {...formik.getFieldProps("City")}>
                            <option value="-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}