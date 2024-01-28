import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export function FormikPreDefinedComponent() {

    return (
        <div className="container-fluid">
            <Formik
                initialValues={{
                    UserName: '',
                    Age: 0,
                    Mobile: '',
                    City: ''
                }}

                validationSchema={
                    yup.object({
                        UserName: yup.string().required('Name Required').min(4, "Name too short.."),
                        Age: yup.number().required("Age Required"),
                        Mobile: yup.string().required("Mobile Required").matches(/\+91\d{10}/, "Invalid Mobile")
                    })
                }

                onSubmit={(values) => {
                    alert(JSON.stringify(values));
                }}
            >
                <Form>
                    <dl>
                        <dt>User Name</dt>
                        <dd>
                            <Field name="UserName" type="text" />
                        </dd>
                        <dd className="text-danger">
                            <ErrorMessage name="UserName" />
                        </dd>
                        <dt>Age</dt>
                        <dd>
                            <Field name="Age" type="text" />
                        </dd>
                        <dd className="text-danger">
                            <ErrorMessage name="Age" />
                        </dd>
                        <dt>Mobile</dt>
                        <dd>
                            <Field name="Mobile" type="text" />
                        </dd>
                        <dd className="text-danger">
                            <ErrorMessage name="Mobile" />
                        </dd>
                        <dt>City</dt>
                        <dd>
                            <Field as="select" name="City">
                                <option>Select City</option>
                                <option>Delhi</option>
                            </Field>
                        </dd>
                    </dl>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}