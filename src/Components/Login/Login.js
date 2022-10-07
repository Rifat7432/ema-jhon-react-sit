import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { activeUsers } from "../../utilities/users";
import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import './Login.css'


const Login = () => {
  const [isPassword,setIsPassword] = useState(true)
  const [error, setError] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const [email, setNewEmail] = useState("");
  const [password, setNewPassword] = useState("");

  const inputEmail = (value) => {
    setNewEmail(value);
    setError(true);
  };
  const inputPassword = (value) => {
    setNewPassword(value);
    setErrorPassword(true);
  };
  const home = useNavigate();
  const submit = () => {
    const users = activeUsers();
    if (email in users) {
      const userPassword = users[email];
      if (userPassword === password) {
        home("/");
      } else {
        setErrorPassword(false);
        setNewPassword("");
      }
    } else {
      setError(false);
      setNewEmail("");
    }
  };
  const show = () => {
    setIsPassword(!isPassword)
  }
  return (
    <div className="w-1/2 mx-auto my-28 bg-red-100 text-slate-800 font-bold px-36 py-20">
      <h2 className="text-4xl">Login</h2>
      <div className="myy-5">
        <div className="my-5">
          <p className="text-start">Email</p>
          <input
            onChange={(e) => inputEmail(e.target.value)}
            className={`w-96 h-10 border-none  text-black text-center rounded-md ${
              error ? "outline-none" : "error"
            }`}
            placeholder={error ? "enter email" : "invalid email"}
            type="text"
            value={email}
          />
        </div>
        <div className="my-5">
          <p className="text-start">password</p>
          <div className="password">
          <input
            onChange={(e) => inputPassword(e.target.value)}
            className={`w-96 h-10 border-none  text-black text-center rounded-md ${
              errorPassword ? "outline-none" : "error"
            }`}
            type={isPassword ? 'password' : 'text'}
            placeholder={errorPassword ? "enter password" : "invalid password"}
            value={password}
          />
          <button className="eye-button transition duration-200 ease-in" onClick={show}>
            <FontAwesomeIcon icon={isPassword ? faEye : faEyeSlash}/>
          </button>
          </div>
        </div>
      </div>
      <div className="my-5 mb-14">
        <button onClick={submit} className="btn btn-info w-11/12 mx-auto">
          Login
        </button>
        <p className="mt-5">
          New to Ema-Jhon ?
          <Link to="/signup">
            <span className="text-orange-600">Create an account</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
