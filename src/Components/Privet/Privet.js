import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { DataContext } from '../Context/UserContext';

const Privet = ({children}) => {
    const {userData,loading} = useContext(DataContext)
    const location = useLocation()
    if(loading){
        return(
            <div className='text-5xl'>
                <h1>Loading ...</h1>
            </div>
        )
    }
    if(userData?.uid){
        return children;
    }
    
       return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
   
};

export default Privet;