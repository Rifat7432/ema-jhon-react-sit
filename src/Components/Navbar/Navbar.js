import React from "react";
import "./Navbar.css";
import logo from "../../logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navbar bg-cyan-900 justify-evenly">
        <div>
          <Link to="/" className=" normal-case text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="display">
          <NavLink
            to="products"
            className={({ isActive }) =>
              isActive ? "text-cyan-500" : undefined
            }
          >
            <span className="text-xl">Products</span>
          </NavLink>
          <NavLink
            to="orders"
            className={({ isActive }) =>
              isActive ? "text-cyan-500" : undefined
            }
          >
            <span className="text-xl">Order</span>
          </NavLink>
          <NavLink
            to="manageInventory"
            className={({ isActive }) =>
              isActive ? "text-cyan-500" : undefined
            }
          >
            <span className="text-xl"> Manage Inventory</span>
          </NavLink>
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive ? "text-cyan-500" : undefined
            }
          >
            <span className="text-xl">Login</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
