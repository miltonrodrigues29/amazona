import React, { useEffect, useState } from 'react'
// import Link from 'react-router-dom'; //Link without {} can be used only if Link is a default export, but we cant use it
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { signin } from '../actions/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
export default function SigninScreen(props)

{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const redirect = props.location.search? props.location.search.split('=')[1]: '/';
    //above code is to get the info, to which page the sigin screen should redirect after login, we get this info from a page which called the signin screen in firest place

    const dispatch = useDispatch();
    const submitHandler = (e)=>
    {
        e.preventDefault();
        dispatch(signin(email,password));  
    }

    const userSignin = useSelector((state)=> state.userSignin);
    const {userInfo,loading,error} = userSignin;

    useEffect(()=>
    {
        if(userInfo)
        { 
            props.history.push(redirect); //this line will change the route in react application
        }
    },[userInfo])  //useEffects runs when there is chane in userInfo
    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
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