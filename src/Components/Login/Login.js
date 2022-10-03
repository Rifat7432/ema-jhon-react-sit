import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { activeUsers } from '../../utilities/users';

const Login = () => {
    const [email,setNewEmail] = useState('');
    const [password,setNewPassword] = useState('');
  
     const inputEmail = (value) =>{
        setNewEmail(value)
     }
     const inputPassword = (value) =>{
        setNewPassword(value)
     }
     const home = useNavigate()
     const submit = () => {
        const users = activeUsers()
        if(email in users){
           const userPassword = users[email];
           if(userPassword === password){
            home('/')
           }
           else{
            alert('invalid password')
           }
        }
        else{
            alert('Enter email')
        }
     }
    return (
        <div className='w-1/2 mx-auto my-28 bg-red-100 text-slate-800 font-bold px-36 py-20'>
            <h2 className='text-4xl'>Login</h2>
            <div className='myy-5'>
                <div className='my-5'>
                    <p className='text-start'>Email</p>
                    <input onChange={(e)=>inputEmail(e.target.value)} className='w-96 h-10 border-none outline-none text-black text-center rounded-md' type="text" />
                </div>
                <div className='my-5'>
                    <p className='text-start'>password</p>
                    <input onChange={(e)=>inputPassword(e.target.value)} className='w-96 h-10 border-none outline-none text-black text-center rounded-md' type="password" />
                </div>
            </div>
            <div className='my-5 mb-14'>
                <button onClick={submit} className="btn btn-info w-11/12 mx-auto">Login</button>
                <p className='mt-5'>
                    New to Ema-Jhon  ?  
                    <Link to='/signup'>
                    <span className='text-orange-600'>Create an account
                    </span>
                    </Link>
                    </p>
            </div>
        </div>
    );
};

export default Login;