import React, { useContext } from "react";
import { Link} from "react-router-dom";
import { deleteShoppingCart, storedCart } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../Main/Main";

const OrderCart = ({ orders, setStroage }) => {
  const [order, setOrder] = useContext(CartContext);
  const clear = () => {
    deleteShoppingCart();
    const empty = storedCart();
    setStroage(empty);
  };
  let price = 0;
  let shipping = 0;
  let quantity = 0;
  for (const order of orders) {
    price += order.price * order.quantity;
    shipping += order.shipping * order.quantity;
    quantity += order.quantity;
  }
  setOrder(quantity);
  const tax = ((price + shipping) * 0.1).toFixed(2);
  let grandTotal = price + shipping + parseFloat(tax);
  return (
    <div className=" rounded-lg">
      <div className="bg-red-50  text-slate-900 ">
        <h1 className="text-3xl my-5">Order Summary</h1>
        <p className="text-xl my-5">selected items : {quantity}</p>
        <p className="text-xl my-5">Total Price : ${price}</p>
        <p className="text-xl my-5">Total Sipping : ${shipping}</p>
        <p className="text-xl my-5">tax : ${tax}</p>
        <p className="text-2xl my-5"> Grand Total : ${grandTotal}</p>
        <div className="mb-10">
          <button onClick={clear} className="btn btn-error mx-auto my-5 w-3/4">
            Clear Cart{" "}
            <span className="ml-3">
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
          </button>
          <Link to="/">
            <button className="btn btn-warning mx-auto  my-5 mb-10 w-3/4">
              Proceed Checkout{" "}
              <span className="ml-3 text-slate-300">
                <FontAwesomeIcon icon={faWallet} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
