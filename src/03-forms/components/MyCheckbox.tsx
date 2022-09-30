import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {


    const [ field, /* metaData */ ] = useField({...props, type: "checkbox" });

  return (
    <>
        <label>
            <input type="checkbox" {...field} {...props} />
            { label }

        </label>
        <ErrorMessage name={props.name} component={'span'} />
        {/* {
            metaData.touched && metaData.error && (
                <span className="error" >{metaData.error}</span>
            )
        } */}
        {/* <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" component={"span"}/> */}
    </>
  )
}
