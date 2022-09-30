import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

import '../styles/styles.css';
 
export const FormikComponentPage = () => {
  return (
    <div>
        <h1>Formik Component </h1>
        <Formik
            initialValues={{
                email: '',
                firstName: '',
                lastName: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={ (values) => {
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                                        .max(15, 'must be 15 characters or less')
                                        .required('Required'),
                    lastName: Yup.string()
                                        .max(15, 'must be 15 characters or less')
                                        .required('Required'),
                    email: Yup.string()
                                        .email('must be a format correct')
                                        .required('Required'),
                    terms: Yup.boolean()
                                .oneOf([true], 'Shuld accept the terms and conditions '),
                    jobType: Yup.string()
                                .notOneOf(['it-jr'], 'Not is accepted')
                                .required('Required'),
                })
            }>
                { formik => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" component={"span"}/>
                            
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" component={"span"}/>

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" component={"span"}/>


                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It Senior</option>
                                <option value="it-jr">It Jr.</option>
                            </Field>
                            <ErrorMessage name="jobType" component={"span"}/>
                            
                            <label>
                                <Field name="terms" type="checkbox" />
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component={"span"}/>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
        </Formik>
    </div>
  )
}
