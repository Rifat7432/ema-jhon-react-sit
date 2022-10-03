import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { activeUsers, addUser } from '../../utilities/users';

const SignUp = () => {
    const [email,setNewEmail] = useState('');
    const [password,setNewPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
  
     const inputEmail = (value) =>{
        setNewEmail(value)
     }
     const inputPassword = (value) =>{
        setNewPassword(value)
     }
     const inputConfirmPassword = (value) =>{
        setConfirmPassword(value)
     }
     const loginPage = useNavigate();
     const submit =() => {
        const users = activeUsers()
        if(email !== ''){
        if(email in users){
          alert('You have already been sing up')
        }
        else{
            if(password === confirmPassword && password !== '' && confirmPassword !== ''){
                addUser(email,password);
                loginPage('/login')
            }
        }
    }
     }
    return (
        <div className='w-1/2 mx-auto my-28 bg-red-100 text-slate-800 font-bold px-36 py-20'>
            <h2 className='text-4xl'>Sign Up</h2>
            <div className='myy-5'>
                <div className='my-5'>
                    <p className='text-start'>Email</p>
                    <input onChange={(e)=>inputEmail(e.target.value)} className='w-96 h-10 border-none outline-none text-black text-center rounded-md' type="text" />
                </div>
                <div className='my-5'>
                    <p className='text-start'>Password</p>
                    <input onChange={(e)=>inputPassword(e.target.value)} className='w-96 h-10 border-none outline-none text-black text-center rounded-md' type="password" />
                </div>
                <div className='my-5'>
                    <p className='text-start'>Confirm Password</p>
                    <input onChange={(e)=>inputConfirmPassword(e.target.value)} className='w-96 h-10 border-none outline-none text-black text-center rounded-md' type="password" />
                </div>
            </div>
            <div className='my-5 mb-14'>
                <button onClick={submit} className="btn btn-info w-11/12 mx-auto">Sign Up</button>
                <p className='mt-5'>
                    Already have an account ?  
                    <Link to='/login'>
                    <span className='text-orange-600'> Login</span>
                    </Link>
                    </p>
            </div>
        </div>
    );
};


export default SignUp;