import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faG } from "@fortawesome/free-solid-svg-icons";

import "./SignUp.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { activeUsers, addUser } from "../../utilities/users";
import { useContext } from "react";
import { DataContext } from "../Context/UserContext";

const SignUp = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [passwordError, setPasswordError] = useState("enter password");
  const { register, update, registerGoogle,verification } = useContext(DataContext);

  const homePage = useNavigate();
  const singUpByGoogle = () => {
    registerGoogle()
      .then((result) => {
        homePage("/");
      })
      .catch((error) => {});
  };
  const submit = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    if (!(password.length > 5 && password.length < 17)) {
      setPasswordError(
        "your password should not contain less then 6 and more then 16 character"
      );
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("set at list one uppercase letter in password");
      return;
    }
    if (!/(?=.*[0-9])/.test(password)) {
      setPasswordError("set at list one number in password");
      return;
    }
    if (!/(?=.*[!@#$%^&*+-])/.test(password)) {
      setPasswordError("set at list one special character in password");
      return;
    }
    register(email, password)
      .then((result) => {
        update(name);
        verification()
        from.reset();
        homePage("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const showPassword = () => {
    setIsPassword(!isPassword);
  };
  return (
    <div className=" w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-1/2 mx-auto my-28 bg-red-100 text-slate-800 font-bold sm:px-36 sm:py-20 p-3">
      <h2 className="text-4xl">Sign Up</h2>
      <form onSubmit={submit} className="my-5">
        <div className="my-5">
          <p className="text-start">Name</p>
          <input
            name="name"
            required
            className={`w-11/12 h-10 border-none  text-black text-center rounded-md `}
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div className="my-5">
          <p className="text-start">Email</p>
          <input
            name="email"
            required
            className={`w-11/12 h-10 border-none  text-black text-center rounded-md `}
            placeholder={"Enter email" }
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
              type={isPassword ? "password" : "text"}
              placeholder={passwordError}
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
          Sign Up
        </button>
      </form>
      <div>
        <p className="text-2xl">Continue with</p>
        <button
          onClick={singUpByGoogle}
          className="btn btn-ghost  text-green-600"
        >
         <img className="h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Google_2011_logo.png/800px-Google_2011_logo.png?20130708141330" alt="" />
        </button>
      </div>
      <div className="my-5 mb-14">
        <p className="mt-5">
          Already have an account ?
          <Link to="/login">
            <span className="text-orange-600"> Login</span>
          </Link>
        </p>
      </div>
      <p>{passwordError}</p>
    </div>
  );
};

export default SignUp;
