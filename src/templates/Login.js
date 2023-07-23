import React from 'react'
import "../css/login.css";
import { useForm } from 'react-hook-form';

function Login() {
    const { handleSubmit, register, formState: {errors}, reset} = useForm();
    function getForm(event) {
        console.log(event);
        reset();
    }
  return (
    <div className='login__center contact-center'>
        <h2 className='login__title contact__title'>Login and be the first to know the news</h2>
        <div className='login__form'>
            <form onSubmit={handleSubmit(getForm)}>
                <input className='form-log name brd' type="text" placeholder='Username' {...register('name', {required: 'Please enter your Name'}) } />
                {errors.name && <p className='contact__err-msg'>{errors.name.message}</p>}
                <input className='form-log name brd' type="password" placeholder='Password'{...register('password', { required: "Password must have 8 letters include symbol and numbers", 
                // minLength: {value: 8, message: "Minimum 8 symbols"}
                })} />
                {errors.password && <p className='contact__err-msg'>{errors.password.message}</p>}
                <button className='btn btn__hover'>Login</button>
                <button className='form__btn '>Or, Sign up</button>
            </form>

        </div>
    </div>
  )
}

export default Login