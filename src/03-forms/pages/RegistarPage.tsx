import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm';

import '../styles/styles.css'

export const RegistarPage = () => {
    const {formData, onChange, name, email, password1, password2, resetForm, isValidEmail} = useForm({
        name: 'miguel',
        email: 'miguel@gmail.com',
        password1: '123',
        password2: '123'
    })
    const onSubmit = (event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        console.log(formData);
    }
  return (
    <div>
        <h1>Register page</h1>
        <hr />
        <form noValidate onSubmit={onSubmit} >
            <input 
                type="text" 
                placeholder="Name"
                value={name}
                onChange={onChange}
                name='name'
                className={`${ name.trim().length <= 0 && 'has-error'}`}
                />
               { name.trim().length <= 0 && <span>This field is required</span>}
            <input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={onChange}
                 name='email'
                 className={`${ !isValidEmail(email) && 'has-error'}`}
                />
                { !isValidEmail(email) && <span>This email is not valid</span>}
            <input 
                type="password" 
                placeholder="Password"
                value={password1}
                onChange={onChange}
                 name='password1'
                />
                    { password1.trim().length <= 0 && <span>This field is required</span>}
                    { password1.trim().length < 6 && <span>The password must be greater than 5</span>}
            <input 
                type="password" 
                placeholder="Repeat password"
                value={password2}
                 name='password2'
                onChange={onChange}
                />
                { password1.trim().length <= 0 && <span>This field is required</span>}
                { password1.trim().length > 0 && password1 !== password2 && <span>The password must be greater than 5</span>}
                <button type="submit">Create</button>
                <button type="button" onClick={resetForm} >Reset</button>
        </form>
    </div>
  )
}
