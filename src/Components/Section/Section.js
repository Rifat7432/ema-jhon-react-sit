import React from "react";
import "./Section.css";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import { addToDb, storedCart } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
const Section = () => {
  const products = useLoaderData();
  const [carts, setCarts] = useState([]);
  const [reloader, setReloader] = useState([]);

  useEffect(() => {
    const getStoredCart = storedCart();
    const savedCart = [];
    for (const id in getStoredCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = getStoredCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCarts(savedCart);
  }, [products, reloader]);
  const addToCart = (selectedProduct) => {
    let newCarts = [];
    const exists = carts.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCarts = [...carts, selectedProduct];
    } else {
      const rest = carts.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCarts = [...rest, exists];
    }
    setCarts(newCarts);
    addToDb(selectedProduct.id);
  };
  return (
    <div className="section">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 w-10/12 mx-auto ">
        {products.map((product) => (
          <Card product={product} addToCart={addToCart} key={product.id}></Card>
        ))}
      </div>
      <div className="all-carts"><Cart carts={carts} setReloader={setReloader}></Cart></div>
      
    </div>
  );
};

export default Section;
