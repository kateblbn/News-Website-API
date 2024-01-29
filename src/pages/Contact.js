import React from 'react'
import '../css/contact.css'
import { useForm } from 'react-hook-form'

function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  function sendValue(event) {
    console.log(event);
    reset();
  }
  return (
    <div>
      <div className='contact-center'>
        <h2 className='contact__title'>Do you have any exclusive or offer?<br /> Send it to us and we will contact with you</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(sendValue)}>
          <input className='name brd' type='text' placeholder='First Name*' {...register('name', {
            required: 'Please enter your Name', maxLength: { value: 12, message: 'Max length is 12 symbols' }
          })} />
          {errors.name && <p className='contact__err-msg'>{errors.name.message}</p>}
          <input className='lastname brd' type='text' placeholder='Last Name*' {...register('lastname', {
            required: 'Plase enter your Last name',
            maxLength: { value: 12, message: 'Max length  is 12 symbols' }
          })} />
          {errors.lastname && <p className='contact__err-msg'>{errors.lastname.message}</p>}
          <input className='email brd' type='email' placeholder='Email*' {...register('email', { required: 'Please Enter your email' })} />
          {errors.email && <p className='contact__err-msg'>{errors.email.message}</p>}
          <textarea className='text brd' type='text' />
          <button className='btn'>SEND</button> 
        </form>
      </div>
    </div>
  )
}

export default ContactForm