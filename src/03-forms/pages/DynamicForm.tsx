import { Formik, Form} from 'formik';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

import formJson from '../data/custom-form.json';


const initialValues: { [key: string]:any} = {};
const requiredFields: { [key: string]:any} = {};


for (const input of formJson) {
  
  initialValues[input.name] = input.value;
  
  if ( !input.validations ) continue;
  
  let schema = Yup.string()

  for (const rule of input.validations) {
    if ( rule.type === 'required') {
        schema = schema.required('Is required')
      }
      
      if ( rule.type === 'minLength') {
        schema = schema.min( rule.value || 2, `The min the characters is ${rule.value || 2}`)
      }

      if ( rule.type === 'email') {
        schema = schema.email('Format incorrect')
      }

    // Others rules
  }

  requiredFields[input.name] = schema;
}


const validationSchema = Yup.object({...requiredFields})
export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            console.log(values)
          }}
          validationSchema={validationSchema}
        >
          { () => (
              <Form noValidate>

                {
                  formJson.map( ({type, name, placeholder, label, options}) => {

                    if ( type === 'input' || type === 'password' || type === 'email' ) {

                      return <MyTextInput type={type as any} 
                                          name={name} 
                                          placeholder={placeholder}
                                          label={label}
                                          key={name}
                                          />
                    } else if ( type === 'select') {
                      return (
                        <MySelect
                          key={name}
                          label={label}
                          name={name}
                        >
                          <option value="">Select an option</option>
                          {
                            options?.map( opt => (
                              
                              <option key={opt.id}  value={opt.id}>{opt.label}</option>
                            ))
                          }
                        </MySelect>
                      )
                    }
                    throw new Error(`${ type } is not soported`);
                    
                    return <span> is not soport</span>
                  })
                }

                <button type="submit">Enviar</button>
              </Form>
          )}
        </Formik>
    </div>
  )
}
