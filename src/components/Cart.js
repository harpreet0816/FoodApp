import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantCategoryItemLists from './RestaurantCategoryItemLists';
import { clearCart } from '../utils/cartSlice';
const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch()
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    return (
        <div className='text-center m-10 p-5'>
            <span className='text-2xl font-bold mr-96' >Cart</span>
            <button className='p-2 bg-black text-white rounded-xl' onClick={handleClearCart}>Clear Cart</button>
            <div className='w-6/12 m-auto'>
            {cartItems.length === 0 && <h1 className='m-10 p-5 text-2xl font-bold  text-green-600'>Please add some Products to the carts and enjoy your meal😍👌</h1>}
            <RestaurantCategoryItemLists items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;