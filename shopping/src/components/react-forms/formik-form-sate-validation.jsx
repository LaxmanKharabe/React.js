import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export function FormikFormStateValidation(){

    return(
        <div className="container-fluid">
            <h4>Register User</h4>
             <Formik
                initialValues={{
                    UserName:'',
                    Age: 0,
                    Mobile:'',
                    City:''
                }}

                validationSchema={
                    yup.object({
                        UserName: yup.string().required('Name Required').min(4, "Name too short.."),
                        Age: yup.number().required("Age Required"),
                        Mobile: yup.string().required("Mobile Required").matches(/\+91\d{10}/,"Invalid Mobile")
                    })
                }

                onSubmit={(values)=>{
                    alert(JSON.stringify(values));
                 }}
             >
                {
                    props =>
                    <Form className={(props.isValid)?'p-2 bg-success':'bg-danger p-2'}>
                       <dl>
                           <dt>User Name</dt>
                           <dd>
                               <Field name="UserName" type="text" />
                           </dd>
                           <dd className="text-warning">
                               <ErrorMessage name="UserName" />
                           </dd>
                           <dt>Age</dt>
                           <dd>
                               <Field name="Age" type="text" />
                           </dd>
                           <dd className="text-warning">
                               <ErrorMessage name="Age" />
                           </dd>
                           <dt>Mobile</dt>
                           <dd>
                               <Field name="Mobile" type="text" />
                           </dd>
                           <dd className="text-warning">
                               <ErrorMessage name="Mobile" />
                           </dd>
                           <dt>City</dt>
                           <dd>
                               <Field as="select" name="City">
                                   <option>Select City</option>
                                   <option>Delhi</option>
                               </Field>
                           </dd>
                           <dd className="text-warning">
                            <ErrorMessage name="City" />
                           </dd>
                       </dl>
   
                       <button type="submit" disabled={(props.isValid)?false:true}  className="btn btn-primary">Submit</button>
                       <button type="submit" className="btn btn-primary ms-2" disabled={(props.dirty)?false:true} >Save</button>
                    </Form>
                   
                }
             </Formik>
        </div>
    )
}