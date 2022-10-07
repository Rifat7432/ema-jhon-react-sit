import React from "react";

const Card = ({ product, addToCart }) => {
  const { name, img, price, seller, ratings } = product;
  return (
    <div>
      <div className="card glass">
        <figure>
          <img src={img} alt="car!" className="h-80 w-full" />
        </figure>
        <div className="card-body h-72">
          <h4 className="card-title">{name}</h4>
          <p>Price : ${price}</p>
          <p>seller : {seller}</p>
          <p>Rating : {ratings} star</p>
          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary mb-1"
          >
            Add to cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
