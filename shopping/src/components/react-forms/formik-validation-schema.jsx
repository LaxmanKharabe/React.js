// This form can submit the data
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

export function FormikValidationSchema(){
    const [city, setCity] = useState("");
    const formik = useFormik({
         initialValues: {
             UserName:'',
             Age: 0,
             Mobile:'',
             City:''
         },
          validationSchema : yup.object({
              UserName: yup.string().required('Name Required').min(4, "Name too short.."),
              Age: yup.number().required("Age Required"),
              Mobile: yup.string().required("Mobile Required").matches(/\+91\d{10}/,"Invalid Mobile"),
          }),
        validate : handleCity,
        onSubmit: (values)=>{
            if(city==="-1"){
                setCity("Please select a city")
            }else{
                alert(JSON.stringify(values));
            }
            
         }
    })
    function handleCity(){
        setCity(document.querySelector("#slectBox").value)
    }
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
                        <select name="City" {...formik.getFieldProps("City")} id="slectBox">
                            <option value="-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{city}</dd>
                    {/* <dd className="text-danger">{formik.errors.City}</dd> */}
                </dl>
                <button type="submit" onClick={handleCity}>Submit</button>
            </form>
        </div>
    )
}