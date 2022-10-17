import { useState } from "react";
import React from "react";
import { createContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
export const CartContext = createContext([]) 
const Main = () => {
  const [order,setOrder] = useState(0)
  return (
    <div>
      <CartContext.Provider value={[order,setOrder]}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      </CartContext.Provider>
    </div>
  );
};

export default Main;
