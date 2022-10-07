import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./SignUp.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { activeUsers, addUser } from "../../utilities/users";

const SignUp = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const [error, setError] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const [email, setNewEmail] = useState("");
  const [password, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputEmail = (value) => {
    setNewEmail(value);
    setError(true);
  };
  const inputPassword = (value) => {
    setNewPassword(value);
    setErrorPassword(true);
  };
  const inputConfirmPassword = (value) => {
    setConfirmPassword(value);
    setErrorPassword(true);
  };
  const loginPage = useNavigate();
  const submit = () => {
    const users = activeUsers();
    if (email !== "") {
      if (email in users) {
        setError(false);
        setNewEmail("");
      } else {
        if (
          password === confirmPassword &&
          password !== "" &&
          confirmPassword !== "" &&
          password.length >= 6
        ) {
          addUser(email, password);
          loginPage("/login");
        } else {
          setErrorPassword(false);
          setNewPassword("");
          setConfirmPassword("");
        }
      }
    }
  };
  const showPassword = () => {
    setIsPassword(!isPassword);
  };
  const show = () => {
    setIsConfirmPassword(!isConfirmPassword);
  };
  return (
    <div className=" w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-1/2 mx-auto my-28 bg-red-100 text-slate-800 font-bold sm:px-36 sm:py-20 p-3">
      <h2 className="text-4xl">Sign Up</h2>
      <div className="my-5">
        <div className="my-5">
          <p className="text-start">Email</p>
          <input
            onChange={(e) => inputEmail(e.target.value)}
            className={`w-11/12 h-10 border-none  text-black text-center rounded-md ${
              error ? "outline-none" : "error"
            }`}
            placeholder={error ? "Enter email" : "This account already exited"}
            type="text"
            value={email}
          />
        </div>
        <div className="my-5">
          <p className="text-start">Password</p>
          <div className="password">
            <input
              onChange={(e) => inputPassword(e.target.value)}
              className={`w-11/12 h-10 border-none  text-black text-center rounded-md ${
                errorPassword ? "outline-none" : "error"
              }`}
              type={isPassword ? "password" : "text"}
              placeholder={
                errorPassword ? "enter password" : `Password doesn't match`
              }
              value={password}
            />
            <button
              className="eye-button xl:pr-5 pr-9 transition duration-200 ease-in"
              onClick={showPassword}
            >
              <FontAwesomeIcon icon={isPassword ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>
        <div className="my-5">
          <p className="text-start">Confirm Password</p>
          <div className="password">
            <input
              onChange={(e) => inputConfirmPassword(e.target.value)}
              className={`w-11/12 h-10 border-none  text-black text-center rounded-md ${
                errorPassword ? "outline-none" : "error"
              }`}
              type={isConfirmPassword ? "password" : "text"}
              placeholder={
                errorPassword ? "enter password" : `Password doesn't match`
              }
              value={confirmPassword}
            />
            <button
              className="eye-button xl:pr-5 pr-9 transition duration-200 ease-in"
              onClick={show}
            >
              <FontAwesomeIcon icon={isConfirmPassword ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>
      </div>
      <div className="my-5 mb-14">
        <button onClick={submit} className="btn btn-info w-11/12 mx-auto">
          Sign Up
        </button>
        <p className="mt-5">
          Already have an account ?
          <Link to="/login">
            <span className="text-orange-600"> Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
