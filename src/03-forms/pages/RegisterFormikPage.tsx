import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';
import '../styles/styles.css'

export const RegistarFormikPage = () => {
   return (
    <div>
        <h1>Register page</h1>
        <Formik
            initialValues={{
                name: '',
                 email: '',
                 password1: '',
                 password2: '',
            }}
            onSubmit={ (values) => {
                 console.log(values)
            }}
            validationSchema={
                Yup.object({

                    name: Yup.string()
                                .required('Is required')
                                .min(2,'The name mush be 2 characters or more')
                                .max(15,'The name mush be 15 characters or less'),
                    email: Yup.string()
                                .email('Format incorrect')
                                .required('Email is required'),
                    password1: Yup.string()
                                    .min(6)
                                    .required(),
                    password2: Yup.string()
                                    .oneOf([Yup.ref('password1')],'The password mush be same')
                })
                                 
            }>
            { ({resetForm}) => (
                    <Form>
                        <MyTextInput label="Name" 
                                    name="name"
                                    placeholder='Miguel'
                                    />
                        <MyTextInput label="Email" 
                                    name="email"
                                    placeholder='Miguel@asd.com'
                                    />
                        <MyTextInput label="Password" 
                                    name="password1"
                                    type='password'
                                    placeholder='****'
                                    />
                        <MyTextInput label="Reapeat Password" 
                                    name="password2"
                                    type='password'
                                    placeholder='****'
                                    />
                        <button type="submit">Create</button>
                        <button type="button" onClick={() => resetForm()} >Reset</button>
                    </Form>

                )
            }

        </Formik>
    </div>
  )
}
