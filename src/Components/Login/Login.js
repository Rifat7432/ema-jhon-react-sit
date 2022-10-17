import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { activeUsers } from "../../utilities/users";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import { DataContext } from "../Context/UserContext";
import { toast } from "react-toastify";

const Login = () => {
  const [userEmail,setUserEmail] = useState('')
  const [isPassword, setIsPassword] = useState(true);
  const [error, setError] = useState(true);
  const [passwordError, setPasswordError] = useState('');
  const { login,forget} = useContext(DataContext);
  const location = useLocation()
  const form = location.state?.from.pathname || '/'
  const home = useNavigate();
  const submit = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email,password)
    login(email,password)
    .then(result=>{
      console.log(result.user)
      from.reset();
      home(form,{replace:true});
      setError(false)
    })
   .catch(error=>{
    console.log(error)
    setPasswordError(error.message)
   })
  };
  const showPassword = () => {
    setIsPassword(!isPassword);
  };
  const getEmail = (event)=>{
    setUserEmail(event.target.value)
  }
  const forgetPassword = ()=>{

    forget(userEmail)
    .then(result=>{
      toast.info(
        "go to your email and set a new password.If you do not get the mail in inbox then check spam.",
        { autoClose: 3000 }
      );
    })
    .catch(error=>{
      toast.error(
        "Enter your email to set new password !",
        { autoClose: 3000 }
      );
  })
}
  return (
    <div className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-1/2 mx-auto my-28 bg-red-100 text-slate-800 font-bold sm:px-36 sm:py-20 p-3">
      <h2 className="text-4xl">Login</h2>
      <form onSubmit={submit} className="my-5">
        <div className="my-5">
          <p className="text-start">Email</p>
          <input
            name="email"
            required
            onBlur={getEmail}
            className={`w-11/12 h-10 border-none  text-black text-center rounded-md `}
            placeholder={ "Enter email"  }
            type="text"
          />
        </div>
        <div className="my-5">
          <p className="text-start">Password</p>
          <div className="password">
            <input
              name="password"
              required
              className={`w-11/12 h-10 border-none  text-black text-center rounded-md `}
              placeholder='Enter password'
              type={isPassword ? "password" : "text"}
            />
            <span
              className="eye-button xl:pr-5 pt-2 pr-9 transition duration-200 ease-in"
              onClick={showPassword}
            >
              <FontAwesomeIcon icon={isPassword ? faEyeSlash : faEye} />
            </span>
          </div>
        </div>

        <button type="submit" className="btn btn-info w-11/12 mx-auto">
          Login
        </button>
      </form>
      <div>
      <button onClick={forgetPassword} className="btn btn-active btn-link">Forget Password</button>
      </div>
      <div className="my-5 mb-14">
     
        <p className="mt-5">
          New to Ema-Jhon ?
          <Link to="/signup">
            <span className="text-orange-600">Create an account</span>
          </Link>
        </p>
      </div>
      
      {error && <p>{passwordError}</p>}
    </div>
  );
};

export default Login;
