import React from "react";

const Foods = ({ food }) => {
  const { strMealThumb, strMeal, strInstructions } = food;
  return (
    <div className="mx-auto">
      <div className="card md:w-96 w-9/12 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img src={strMealThumb} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          <p>{strInstructions.slice(0, 200)}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
