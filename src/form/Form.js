import React from 'react'
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import './css.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 50px 0;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    .marginLeft {
        padding: 0 5px;
        margin-bottom: 15px;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid black;
        width: 100%;
        height: 50px;
        &:focus {
            outline: none;
            border-bottom: 2px solid blue;
            transition: 0.5s all;
        }
        &::placeholder {
            font-size: 20px;
        }
    }
    .formData {
        display: flex;
        flex-direction: column;
        width: 395px;
        .check {
            width: 15px;
            height: 15px;
            margin-right: 15px;
        }
        .red {
            color: red;
            &:nth-child(8), &:nth-child(10) {
                margin-bottom: 15px;
            }
        }
        .redBottom {
            border-bottom: 2px solid red;
        }
        .block {
            display: block;
        }
    }
`
const CheckBoxStyle = styled.div`
    display: flex;
    margin-bottom: 15px;
    font-size: 14px;
    align-items: center;
`
const Button = styled.button`
    width: 100%;
    height: 50px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    background-color: rgb(103, 173, 659);
    margin-bottom: 15px;
    &:hover {
        background-color: rgb(146 186 232);
        transition: 1s all;
    }
`

function SingUp() {
    // const warn = 
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    function submitData(data) {
        console.log(data);
        reset();
    }
    return (
        <Container>

            <div>
                <h1 className='sing__title'>Sign Up</h1>
            </div>
            <Wrapper>
                <form onSubmit={handleSubmit(submitData)} className='formData'>
                    <input className='marginLeft' type='text' placeholder='Username' {...register('username', { required: 'Please enter username', maxLength: 15 })} />
                    {errors.username && <p className='red'>{errors.username.message}</p>}
                    <input className='marginLeft' type='email' placeholder='Email' {...register('email', { required: 'Please enter email', maxLength: 15 })} />
                    {errors.email && <p className='red'>{errors.email.message}</p>}
                    <input className='marginLeft' type='password' placeholder='Password' {...register('password', { required: 'Create strong password', minLength: { value: 8, message: 'Min length 8 symbols' } })} />
                    {errors.password && <p className='red'>{errors.password.message}</p>}
                    <input className='marginLeft' type='password' placeholder='Confirm Password' {...register('confPassword', { required: 'Confirm your password', minLength: { value: 8, message: 'Min length 8 symbols' } })} />
                    {errors.confPassword && <p className='red'>{errors.confPassword.message}</p>}
                    <CheckBoxStyle>
                        <input className='check' type='checkbox' {...register('checkbox', { required: "Please agree with Terms & Conditions" })} />
                        <p>I Agree to the Terms & Conditions</p>
                    </CheckBoxStyle>
                    {errors.checkbox && <p className='red block'>{errors.checkbox.message}</p>}

                    <Button>SIGNUP</Button>
                </form>
            </Wrapper>
        </Container>
    )
}

export default SingUp;