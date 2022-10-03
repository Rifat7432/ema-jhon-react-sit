import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteShoppingCart, storedCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = ({carts,setReloader}) => {
    const clear = () =>{
        deleteShoppingCart()
        const empty = storedCart()
        setReloader(empty)
    }
    let price = 0;
    let shipping = 0;
    let quantity = 0;
    for(const cart of carts){
        price += cart.price * cart.quantity;
        shipping += cart.shipping * cart.quantity;
        quantity += cart.quantity
    }
    const tax = ((price + shipping) * 0.1).toFixed(2);
    let grandTotal = price + shipping + parseFloat(tax)
    return (
        <div className='reletive'>
            <div className='bg-red-50 h-96 text-slate-900 cart'>
              <h1 className='text-3xl'>Order Summary</h1>
              <p className='text-xl'>selected items : {quantity}</p>
              <p className='text-xl'>Total Price : ${price}</p>
              <p className='text-xl'>Total Sipping : ${shipping}</p>
              <p className='text-xl'>tax : ${tax}</p>
              <p className='text-2xl'>  Grand Total : ${grandTotal}</p>
              <div>
              <button onClick={clear} className="btn btn-error block mt-5 w-full">Clear Cart    <FontAwesomeIcon icon={faTrashAlt}/></button>
              <Link to='/orders'>
              <button className="btn btn-warning block mt-5 w-full">Review Orders   <FontAwesomeIcon icon={faArrowRight}/></button>
              </Link>
              </div>
        </div>
        </div>
    );
};

export default Cart;