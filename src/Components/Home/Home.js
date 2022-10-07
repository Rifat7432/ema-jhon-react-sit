import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/giphy.gif";

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-4 my-12 mx-auto">
      <div className="my-auto relative mt-8 md:mt-0">
        <h1 className="text-5xl mt-20">New Collection For Fall</h1>
        <h4 className="text-xl">
          Discover all the new arrivals of ready-to-wear Collection
        </h4>
        <h6 className="text-base text-orange-300 absolute top-0 left-16">
          sale up to 70% off
        </h6>
        <Link to="products">
          <button className="btn btn-active btn-primary  my-10">
            Shope Now
          </button>
        </Link>
      </div>
      <div className="mx-auto">
        <img className="h-5/6 mt-2" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
