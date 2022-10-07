import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Foods from "../Foods/Foods";

const Food = () => {
  const getFood = useNavigate();
  const input = (value) => {
    getFood(`../manageInventory/${value}`);
  };
  const foods = useLoaderData();
  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Enter food name?</span>
        </label>
        <input
          onChange={(e) => input(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label"></label>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {foods ? foods.meals.map((food) => (
          <Foods food={food}></Foods>
        )) : <h1>nothing found</h1>}
      </div>
    </div>
  );
};

export default Food;
