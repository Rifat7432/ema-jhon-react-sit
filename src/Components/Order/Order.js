import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Order = ({order,removeOrder}) => {
    const {img,name,price,shipping,quantity,id} = order;
    console.log(id)
    
    return (
        <div className='grid grid-cols-3 h-48  rounded-lg bg-zinc-400 relative'>
            <div className='mx-3 my-auto'>
                <img className='w-24 h-24 rounded-lg' src={img} alt="" />
            </div>
            <div className='mx-3 my-auto'>
                <h3 className='text-xl'>{name}</h3>
                <h3 className='text-lg'>Price : {price}</h3>
                <h3 className='text-lg'>Shipping price : {shipping}</h3>
            </div>
            <div className='my-auto mx-3'>
            <button onClick={()=>removeOrder(id)} className="btn btn-error rounded-full">
                <FontAwesomeIcon icon={faTrashAlt}/>
            </button>
            <h1 className='absolute top-0 right-0 text-base text-slate-200 font-bold bg-slate-900 rounded-full'>{quantity > 1 ? quantity + 'x' : ''}</h1>
            </div>
           
        </div>
    );
};

export default Order;