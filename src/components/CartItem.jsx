import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import {toast} from 'react-hot-toast';

const CartItem = ({item, itemIndex}) => {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item Removed");
    }

  return (
    <div className='w-[100%] md:w-[80%] flex flex-col p-2'>

        <div  className=' flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>

            <div className='w-[30%]'>
                <img src={item.image}  className='object-cover '/>
            </div>
            <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
                <h1 className='text-xl text-slate-700 font-semibold'>{item.title}</h1>
                <h1 className='text-base text-slate-700 font-medium'>{item.description.split(" ").slice(0,10).join(" ") + "..." }</h1>

                <div className='flex items-center justify-between'>
                    <p className='font-bold text-lg text-green-600'>₹{item.price}</p>
                    <div onClick={removeFromCart} className=' bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3'>
                    <MdDelete />
                </div>
            </div>
            </div>

            
        </div>

    </div>
  )
}

export default CartItem;