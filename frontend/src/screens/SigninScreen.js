import React, { useState } from 'react'
// import Link from 'react-router-dom'; //Link without {} can be used only if Link is a default export, but we cant use it
import {Link} from 'react-router-dom';
export default function SigninScreen()
{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const submitHandler = (e)=>
    {
        e.preventDefault();
        //todo: signin action  
    }
    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                <h1>Sign In</h1>
                </div>
                <div>
                <label htmlFor='email'>
                Email Address
                </label>
                <input type='email' id="email" placeholder='Enter Email' required onChange={(e)=>setEmail(e.target.value)}>
                </input>
                </div>

                <div>
                <label htmlFor='password'>
                Password
                </label>
                <input type='password' id="password" placeholder='Enter Password' required onChange={(e)=>setPassword(e.target.value)}>
                </input>
                </div>
                <div>
                    <label/>
                    <button className='primary' type='submit'>Sign In</button>
                </div>
                <div>
                    <label />
                    <div>
                        New Customer? {' '}
                        <Link to="/register">Create your account</Link>
                    </div>
                </div>
                
            </form>
        </div>
        
    )
}