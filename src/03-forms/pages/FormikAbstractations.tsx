import { Formik, Form } from 'formik'
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput, MySelect, MyCheckbox } from '../components';
 
export const FormikAbstractations = () => {
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
                            <MyTextInput label="firstName" 
                                         name="firstName"
                                         placeholder='Miguel'
                                         />

                            <MyTextInput label="lastName" 
                                         name="lastName"
                                         placeholder='Herrera'
                                         />
                
                
                            <MyTextInput label="email" 
                                         name="email"
                                         type="email" 
                                         placeholder='miguel@algo.com'
                                         />
                
                            <MySelect label="Job Type" name="jobType">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It Senior</option>
                                <option value="it-jr">It Jr.</option>
                            </MySelect>
                            

                            <MyCheckbox label='Terms and conditions' name='terms' />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
        </Formik>
    </div>
  )
}
