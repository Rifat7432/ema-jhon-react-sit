import React from "react";
import "./Navbar.css";
import logo from "../../logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Main/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DataContext } from "../Context/UserContext";
const Navbar = () => {
  const [order,setOrder] = useContext(CartContext)
  const [isMD,setIsMD] = useState(false);
  const responsive = ()=>{
     setIsMD(!isMD)
  }
  const {logOut,userData} = useContext(DataContext)

  return (
    <div >
      <div className={`relative navbar bg-cyan-900 justify-between md:justify-around ${isMD ? 'block md:flex' : 'flex'}`}>
        <div  className={` ${isMD ? 'block md:inline-flex' : undefined}`}>
          <Link to="/" className=" normal-case text-xl ">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={`display  md:flex md:flex-row  justify-evenly duration-1000 ease-in ${isMD ? ' flex flex-col  md:flex md:flex-row ' : 'hidden'}`} >
          <NavLink
            to="products"
            className={({ isActive }) =>
              isActive ? "text-cyan-500 btn btn-ghost" : 'btn btn-ghost'
            }
          >
            <span className="text-xl">Products</span>
          </NavLink>
          <NavLink
            to="orders"
            className={({ isActive }) =>
              isActive ? "text-cyan-500 btn btn-ghost" : 'btn btn-ghost'
            }
          >
            <span className="text-xl relative">Order
            <span className={`absolute top-0 text-xs bg-red-900 text-slate-300 rounded-full p-1 ${order > 0 ? 'inline' : 'hidden'}`}>{order}</span>
            </span>
          </NavLink>
          <NavLink
            to="manageInventory"
            className={({ isActive }) =>
              isActive ? "text-cyan-500 btn btn-ghost" : 'btn btn-ghost'
            }
          >
            <span className="text-xl"> Manage Inventory</span>
          </NavLink>
        {userData?.uid ? <button
          onClick={logOut}
          className="btn btn-ghost mx-4"
        >
          <span className="text-xl">LogOut</span>
        </button>
        :
        <NavLink
          to="login"
          className={({ isActive }) =>
            isActive ? "text-cyan-500 btn btn-ghost" : 'btn btn-ghost'
          }
        >
          <span className="text-xl">Login</span>
        </NavLink>
        }
         { userData?.photoURL && <div className="w-10 rounded-full">
          <img src={userData.photoURL} />
        </div>}
         
        
        </div>
        <div className="absolute top-4 right-5 text-3xl md:hidden">
          <button onClick={responsive}><FontAwesomeIcon icon={faBars}/></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
