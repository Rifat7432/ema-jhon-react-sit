import React from 'react';
import Order from '../Order/Order'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb, storedCart } from '../../utilities/fakedb';
import OrderCart from '../OrderCart/OrderCart';
import './Orders.css'

const Orders = () => {
    const [orders,setOrders] = useState([]);
    const [storage,setStroage] = useState({})
    const products = useLoaderData();
    const removeOrder = (id)=>{
      console.log(id)
        removeFromDb(id)
        const data = storedCart()
        setStroage(data)
    }
    useEffect(()=>{
        const getStoredCart = storedCart();
        const savedCart = []
        for (const id in getStoredCart) {
          const addedProduct = products.find(product => product.id === id)
          if(addedProduct){
            const quantity = getStoredCart[id]
            addedProduct.quantity = quantity
            savedCart.push(addedProduct)
            }
          }
          setOrders(savedCart)
    },[products,storage])
    return (
        <div className='grid grid-cols-2 gap-10 my-28'>
            <div className='grid grid-cols-1 gap-6 width'>
                  {
                    orders.map(order =><Order order={order} key={order.id} removeOrder={removeOrder}></Order>)
                  }
            </div>
            <div>
              <OrderCart orders={orders} setStroage={setStroage}></OrderCart>
            </div>
        </div>
    );
};

export default Orders;